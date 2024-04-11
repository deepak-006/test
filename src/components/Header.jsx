import React from "react";
import css from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import Qanda from "./Qanda";
import Logout from "./Logout";
import CreditDisplay from "./CreditDisplay";
import DonateUs from "./Donate";
const Header = () => {
  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.heading}>
          <div className={css.header}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              QandA
            </Link>
          </div>

          <div className={`${css.bellIconDiv} ${css.askquestion}`}>
            <Link to="/usercontainer">
              {" "}
              <i className={"fas fa-cog " + css.userIcon}></i>{" "}
            </Link>
          </div>

          <div className={`${css.bellIconDiv} ${css.askquestion}`}>
            <i className="fas fa-bell"></i>
          </div>

          <Link className={css.askquestion} to="/postquestion">
            + Ask Question
          </Link>

          <Link className={css.viewQuestion} to="/viewQuestion">
            {" "}
            My Questions
          </Link>
          <CreditDisplay />
          {/* <DonateUs /> */}

          <Link className={css.viewQuestion} to="/donate">
            {" "}
            Donate Us
          </Link>

          <Logout />
        </div>
        {/* <MySolution></MySolution> */}
      </div>
    </>
  );
};

export default Header;
