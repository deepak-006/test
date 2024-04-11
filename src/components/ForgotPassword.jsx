import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:4500/auth/forgotPassword", {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for resetting password link");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ForgotPassword;
