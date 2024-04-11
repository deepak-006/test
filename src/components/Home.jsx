import React from "react";
import Axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Header from "./Header";
import QnA from "./QnA";
import Feedback from "./Feedback";
import css from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate(); // Move useNavigate inside the functional component
  Axios.defaults.withCredentials = true;

  return (
    <>
      <Header />
      <Link className={css.askquestion} to="/postquestion">
        + Ask Question
      </Link>

      <br />
    </>
  );
};

export default Home;
