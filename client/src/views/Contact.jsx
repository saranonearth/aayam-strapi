import React, { useEffect, useState } from "react";
import axios from "axios";

import contact from "../assets/contacts.png";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import _ from "../config";
import ReactGA from "react-ga";
const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  ReactGA.pageview("/contact");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      Name: state.name,
      Phone: state.number,
      Email: state.email,
      Message: state.message,
    };

    try {
      const response = await axios.post(`${_.API_URL}/messages`, body, config);

      if (response.status == 200) {
        setStatus("Thanks for reaching out.");
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }

    setState({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

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
          <p className="title-text">Contact Us</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="contact">
        <br />
        <div className="center">
          <div className="title-bold m">Get in touch</div>
        </div>
        <div className="center">
          <img className="contact-icon" src={contact} alt="contact-icon" />
        </div>

        <div className="center">
          <br />
          <br />
          <p>aayam@example.com </p>
        </div>
        <div className="center mb-10">
          {" "}
          <br />
          <p>+91 98562 25232</p>
        </div>

        <div className="center">
          <div className="title-bold m">Got a query?</div>
        </div>
        <div className="message">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label> <br />
                <input
                  onChange={handleChange}
                  value={state.name}
                  required
                  type="text"
                  name="name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label> <br />
                <input
                  onChange={handleChange}
                  required
                  value={state.email}
                  type="email"
                  name="email"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Contact Number</label> <br />
                <input
                  onChange={handleChange}
                  value={state.number}
                  required
                  type="text"
                  name="number"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label> <br />
                <textarea
                  value={state.message}
                  onChange={handleChange}
                  required
                  name="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
            <div className="center c2">{status && <p>{status}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
