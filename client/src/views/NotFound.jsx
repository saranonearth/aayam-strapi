import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const NotFound = () => {
  return (
    <div>
      <div className="triangle-left move"></div>
      <div className="banner banner-2">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>
        <div className="content">
          <p className="title-text">404 Error</p>
        </div>
        <div className="dash"></div>
      </div>
      <div>
        <div className="center">
          <Link to="/">
            <div className="submit-btn">Go home</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
