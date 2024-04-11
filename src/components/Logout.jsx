import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

import styles from "./Logout.module.css"; // Import CSS module for styling

const Logout = () => {
  const navigate = useNavigate();

  // Retrieve user's name from local storage
  const name = localStorage.getItem("qandaStudentName");
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility

  const handleLogout = () => {
    // Clear authentication token (e.g., remove from local storage or delete cookie)
    localStorage.removeItem("token"); // Assuming you store token in local storage
    // Redirect to login page
    navigate("/login");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  return (
    <div className={styles.dropdown}>
      {/* User icon with down arrow */}
      <i className={"fas fa-user " + styles.userIcon} onClick={toggleMenu}></i>
      {/* <i
        className={"fa-solid fa-arrow-right-from-bracket" + styles.userIcon}
        onClick={toggleMenu}
      ></i> */}
      {/* Dropdown menu */}
      {showMenu && (
        <div className={styles.menu}>
          Dear {name},{/* Display user name */}
          <br />
          {/* Logout button */}
          Sorry to see you going.
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
