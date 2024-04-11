import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import styles from "./LandingPage.module.css"; // Import CSS module

const LandingPage = () => {
  // Retrieve user name from local storage
  const username = localStorage.getItem("username");

  // Retrieve user's name from local storage
  const name = localStorage.getItem("qandaStudentName");
  console.log("Name from local storage:", name);

  return (
    <div>
      <div>
        Welcome, {name || "Guest"}!
        <div className={styles.logout}>
          <Logout />
        </div>
      </div>
      <p>Hope you are doing well.</p>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div
          style={{
            backgroundColor: "lightyellow",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer", // Change cursor to pointer on hover
          }}
        >
          Ask your doubt and get answers, our skilled SMEs are waiting to help
          you out.
        </div>
      </Link>{" "}
    </div>
  );
};

export default LandingPage;
