import React, { useEffect, useState } from "react";
import axios from "axios";

const QnA = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    // Fetch question from your Express server
    const fetchQuestion = async () => {
      try {
        const response = await axios.get("http://localhost:4500/RTEContent");
        setQuestion(response.data.question);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    // Call the fetchQuestion function
    fetchQuestion();
  }, [question]); // Empty dependency array to fetch the question only once when the component mounts

  useEffect(() => {
    // Fetch answer from your Express server
    const fetchAnswer = async () => {
      try {
        const response = await axios.get("http://localhost:4500/RTEContent");

        setAnswer(response.data.answer);
      } catch (error) {
        console.error("Error fetching answer:", error);
      }
    };

    // Call the fetchQuestion function
    fetchAnswer();
  }, [answer]); // Empty dependency array to fetch the question only once when the component mounts

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: question }}></div>
      <br />
      <p>{answer}</p>
    </div>
  );
};

export default QnA;
