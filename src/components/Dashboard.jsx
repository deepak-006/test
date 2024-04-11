import Axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:4500/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/home");
      }
      console.log(res);
    });
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
