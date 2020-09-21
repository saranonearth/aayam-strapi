import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Logo from "../assets/logo.png";

const Productions = () => {
  return (
    <div>
      <div class="triangle-left move"></div>
      <div className="banner banner-2">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>

        <div className="content">
          <p className="title-text">Our Productions</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="productions">
        <div className="production-list">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Productions;
