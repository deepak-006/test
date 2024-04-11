import React, { useEffect, useState } from "react";
import Axios from "axios";
import css from "./ViewQuestion.module.css";
import Qanda from "./Qanda";

const stripHtmlTags = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
};

const ViewQuestion = () => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await Axios.get(
        "http://localhost:4500/askedQuestionIdView"
      );
      const solvedQuestionIds = response.data;

      const detailsPromises = solvedQuestionIds.map(async (id) => {
        const assetResponse = await Axios.get(
          `http://localhost:4500/asset/${id}`
        );
        return assetResponse.data;
      });

      const solvedQuestionsDetails = await Promise.all(detailsPromises);
      setSolvedQuestions(solvedQuestionsDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = solvedQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(solvedQuestions.length / questionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className={css.container}>
      {loading ? (
        <div className={css.loading}> Loading, Please wait...</div>
      ) : (
        <>
          <Qanda />
          <h2>Solved Questions</h2>
          <div className={css.questionsContainer}>
            <ol className={css.questionList}>
              {currentQuestions.map((question, index) => (
                <li key={index} className={css.questionItem}>
                  <div
                    className={css.questionContent}
                    onClick={() => handleQuestionClick(question)}
                  >
                    {console.log(question)}

                    <span className={css.serialNumber}>
                      {indexOfFirstQuestion + index + 1}
                    </span>
                    <div>
                      <strong>Question:</strong>{" "}
                      {stripHtmlTags(question.question)}
                    </div>
                    <div>
                      <strong>Answer:</strong> {stripHtmlTags(question.answer)}
                    </div>
                    <div>
                      <strong>Solved On:</strong>{" "}
                      {new Date(question.solvedOn).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </div>
                    <div className={css.feedback}>
                      <div>
                        {" "}
                        <i className="fas fa-thumbs-up"></i> :{" "}
                        {question.feedback.likes}
                      </div>
                      <div>
                        <i className="fas fa-thumbs-down"></i> :{" "}
                        {question.feedback.dislikes}
                      </div>
                      <div>
                        <i className="fas fa-comment"></i>{" "}
                        {question.feedback.comments
                          ? question.feedback.comments.length
                          : 0}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className={css.pagination}>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={css.pageButton}
              >
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={
                    number === currentPage ? css.activePage : css.pageButton
                  }
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(solvedQuestions.length / questionsPerPage)
                }
                className={css.pageButton}
              >
                Next
              </button>
            </div>
          </div>
          {selectedQuestion && (
            <div className={css.window}>
              <button
                className={css.expandButton}
                onClick={() => {
                  const windowElement = document.querySelector(
                    `.${css.window}`
                  );
                  windowElement.style.height = "100vh"; // Expand window to fit the screen
                  windowElement.style.overflowY = "auto"; // Enable scrolling
                }}
              >
                Expand
              </button>
              <div className={css.windowContent}>
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className={css.backButton}
                >
                  Back
                </button>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedQuestion.question,
                  }}
                />
                <h5>Answer:</h5>
                <div
                  dangerouslySetInnerHTML={{ __html: selectedQuestion.answer }}
                />
                <br />
                <div>Feedback: {selectedQuestion.feedback.comments}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ViewQuestion;
