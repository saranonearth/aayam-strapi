import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-part">
        <div className="footer-left">
          <div>
            <div>
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
            <div>
              <p className="sub-title">Get in touch</p>
              <p>aayam@example.com</p>
              <p className="mt-4">+91 98562 25232</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <p className="sub-title">Get social</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <div>
            <img className="logo-footer" src={Logo} alt="aayam-logo" />
          </div>
          <div className="ma-n">
            <p>
              Website developed with ❤️ by &nbsp;
              <a className="ma-na" href="https://saranonearth.me/">
                saranonearth
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
