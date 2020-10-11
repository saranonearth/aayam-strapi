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
                Mandi House, <br />
                Delhi
                <br />
              </p>
            </div>
            <div>
              <p className="sub-title">Get in touch</p>
              <p>info.aayaminstitute@gmail.com</p>
              <p className="mt-4">+91 78383 04770, +91 88265 85888</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div>
             <p className="sub-title">Get social</p>

                <span>
                  <a
                    className="link-a"
                    href="https://www.instagram.com/aayam_dance_troupe/?hl=en"
                    target="_blank"
                  >
                <i class="fab fa-instagram s-icon"></i>
                  </a>
                </span>
                <span>
                  <a
                    className="link-a"
                    href="https://www.youtube.com/channel/UC5hcE48aMfqmPu9qTFQAwlA"
                    target="_blank"
                  >
            <i class="fab fa-youtube s-icon"></i>
                  </a>
                </span>
                <span>
                  <a
                    className="link-a"
                    href="https://www.facebook.com/aayaminstitute27/"
                    target="_blank"
                  >
                <i class="fab fa-facebook-f s-icon"></i>
                  </a>
                </span>
              
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
