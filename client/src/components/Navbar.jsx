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
                to="/gallery"
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
                  Mandi House, <br />
                  Delhi
                  <br />
                </p>
              </div>
              <div className="ml-4 sub-in">
                <p className="sub-title">Get in touch</p>
                <p>info.aayaminstitute@gmail.com</p>
                <p className="mt-4">+91 78383 04770, +91 88265 85888</p>
              </div>
            </div>
            <div className="sub-section">
              <div className="sub-in">
                <p className="sub-title">Get social</p>
                <p className="sub-title">Get social</p>
                <p>
                  <a
                    className="link-a"
                    href="https://www.instagram.com/aayam_dance_troupe/?hl=en"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    className="link-a"
                    href="https://www.youtube.com/channel/UC5hcE48aMfqmPu9qTFQAwlA"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </p>
                <p>
                  <a
                    className="link-a"
                    href="https://www.facebook.com/aayaminstitute27/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </p>
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
