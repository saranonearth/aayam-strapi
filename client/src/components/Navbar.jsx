import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = ({ changeShowNavbar }) => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-section1">
          <div className="nav-section1-content">
            <div>
              <i className="far fa-compass compass-icon"></i>
            </div>
            <div>
              <Link className="link" onClick={() => changeShowNavbar()} to="/">
                Home
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="/productions"
              >
                Our Productions
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="/courses"
              >
                Courses
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="gallery"
              >
                Gallery
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="/upcoming-events"
              >
                Upcoming Events
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="/blog"
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                className="link"
                onClick={() => changeShowNavbar()}
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-section2 no-mobile">
          <div className="section2-content">
            <div>
              <p className="sub">
                Aayam was established by Ms.Sindhu Mishra, a learned
                Bharatnatyam dancer and a dedicated teacher with the view of
                making young generation aware of the aesthetics of performing
                arts like Dance & Music.
              </p>
            </div>
            <div className="sub-section split">
              <div className="sub-in">
                <p className="sub-title">Find us at</p>
                <p>
                  Aayam <br />
                  56-A, Pocket F, <br />
                  Mayur Vihar Phase II,
                  <br />
                  New Delhi -110091
                  <br />
                </p>
              </div>
              <div className="ml-4 sub-in">
                <p className="sub-title">Get in touch</p>
                <p>aayam@example.com</p>
                <p className="mt-4">+91 98562 25232</p>
              </div>
            </div>
            <div className="sub-section">
              <div className="sub-in">
                <p className="sub-title">Get social</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
              <div>
                <div>
                  <img className="logo-nav" src={Logo} alt="aayam-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
