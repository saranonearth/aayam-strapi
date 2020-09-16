import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Contact = () => {
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
          <p className="title-text">Contact Us</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="contact">
        <div className="center">
          <p>Get in touch</p>
        </div>
        <div className="center">
          <br />
          <br />
          <p>aayam@example.com </p>
        </div>
        <div className="center">
          {" "}
          <br />
          <p>+91 98562 25232</p>
        </div>
        <div className="center">
          <p>Get in touch</p>
        </div>
        <div className="message">
          <div>
            <form>
              <div className="field">
                <label htmlFor="name">Name</label> <br />
                <input type="text" name="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label> <br />
                <input type="text" name="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Contact Number</label> <br />
                <input type="text" name="number" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label> <br />
                <textarea name="message" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
