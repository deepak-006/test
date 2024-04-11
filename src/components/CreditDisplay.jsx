import React, { useEffect, useState } from "react";
import Axios from "axios";
import css from "./CreditDisplay.module.css"; // Import CSS for styling

const CreditDisplay = () => {
  const [userCredit, setUserCredit] = useState(0); // State variable for user's credit

  const email = localStorage.getItem("qandaStudentEmail");

  useEffect(() => {
    fetchUserCredit(); // Fetch user's credit when component mounts
  }, []);

  const fetchUserCredit = async () => {
    try {
      // Fetch user data to get credit
      const userData = await Axios.post("http://localhost:4500/studentCredit", {
        studentId: email, // Send the email in the request body
      });
      setUserCredit(userData.data.credit);
    } catch (error) {
      console.error("Error fetching user credit:", error);
    }
  };

  return (
    <div className={css.creditContainer}>
      <span className={css.creditText}>Credit: {userCredit}</span>
    </div>
  );
};

export default CreditDisplay;
