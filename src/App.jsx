import { useState } from "react";
import Header from "./components/Header";
import QnA from "./components/QnA";
import PostQuestion from "./components/PostQuestion";
import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import Feedback from "./components/Feedback";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
import UserContainer from "./components/UserContainer";
import Profile from "./components/Profile";
import MyQuestion from "./components/MyQuestions";
import Payment from "./components/Payment";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import ViewQuestion from "./components/ViewQuestion";
import StudentDashboard from "./components/StudentDashboard";
import LandingPage from "./components/LandingPage";
import TermsandConditions from "./components/TnC";
import DonateUs from "./components/Donate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          TermsandConditions
          <Route path="/tnc" element={<TermsandConditions />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/qna" element={<QnA />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/postquestion" element={<PostQuestion />}></Route>
          <Route path="/richtexteditor" element={<RichTextEditor />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/usercontainer" element={<UserContainer />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/myquestion" element={<MyQuestion />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/donate" element={<DonateUs />}></Route>
          <Route
            path="/resetPassword/:token"
            element={<ResetPassword />}
          ></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/richtexteditor" element={<RichTextEditor />}></Route>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/viewQuestion" element={<ViewQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
