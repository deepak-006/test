import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import css from "./MyQuestions.module.css";
import { Link, useNavigate } from "react-router-dom";

const MyQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [date, setDate] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Fetch question and answer from your Express server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4500/RTEContent");
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
      } catch (error) {
        console.error("Error fetching question and answer:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to fetch the question and answer only once when the component mounts

  useEffect(() => {
    // Fetch answer from your Express server
    const fetchMyQuestion = async () => {
      try {
        const response = await axios.get("http://localhost:4500/RTEContent");

        // Format the date
        const date = new Date(response.data.date);
        const formattedDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        setDate(formattedDate);
        // setDate(response.data.date);
        const cleanedHtml = response.data.html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
        setHtml(cleanedHtml);
        // setHtml(response.data.html);
      } catch (error) {
        console.error("Error fetching date:", error);
      }
    };

    // Call the fetchQuestion function
    fetchMyQuestion();
  }, []); // Empty dependency array to fetch the question only once when the component mounts

  return (
    <>
      <div className={css.myQuestionHeading}>My Questions</div>
      <h4>
        <Link to="/usercontainer"> Back</Link>
      </h4>
      <div className={css.myQuestion}>
        <Link to="/viewQuestion" className={css.questionContainer}>
          <div>
            <div className={css.serialNum}>Sl.No. 1</div>
            <p className={css.question}>
              {question.replace(/<\/?[^>]+(>|$)/g, "")}
            </p>{" "}
            <span className={css.questionDate}>{date}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyQuestion;
