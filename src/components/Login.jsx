import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import styles from "./Login.module.css"; // Import CSS module
import Qanda from "./Qanda";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4500/auth/login", {
        email: email,
        password: password,
      });
      console.log("Login response:", response.data);
      if (response.data.success == true) {
        console.log("Login successful, redirecting to dashboard");

        // Store user data in local storage
        // localStorage.setItem("username", username);
        localStorage.setItem("qandaStudentEmail", response.data.email);

        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("qandaStudentName", response.data.name); // Store user's name
        console.log(
          "Token set in local storage inside Login:",
          response.data.name
        );

        // Redirect to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Qanda />
      <div className={styles.heading}>Welcome</div>
      <div className={styles.subheading}>Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p className={styles.signupText}>
        Not registered yet? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
