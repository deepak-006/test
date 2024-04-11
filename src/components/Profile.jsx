import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CreditDisplay from "./CreditDisplay";

const Profile = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("qandaStudentEmail");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        const response = await Axios.post(
          "http://localhost:4500/studentProfile",
          { studentId: email } // Send email in the request body
        );
        setStudentData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);
  return (
    <>
      <h3>
        <Link to="/home">Home</Link>
        <br />
      </h3>
      <h4>
        <Link to="/usercontainer">Back</Link>
      </h4>
      {loading ? (
        <div>Loading...Please wait.</div>
      ) : (
        <div className="profile-container">
          <div className="profile-info">
            <h2>Name: {studentData.student.name}</h2>
            <p>Username: {studentData.student.username}</p>
            <p>Email: {studentData.student.email}</p>
            <div className="payment-details">
              <h3>Payment Details:</h3>
              <CreditDisplay />
              <p>{studentData.paymentDetails}</p>
              <h3>
                Asked {studentData.student.askedQuestionsId.length} Questions
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
