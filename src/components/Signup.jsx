import React, { useState } from "react";
import css from "./Signup.module.css"; // Import CSS module
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:4500/auth/signup", {
      name,
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={css.signupContainer}>
        <form className={css.signupForm} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Submit</button>

          <p>
            Have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
