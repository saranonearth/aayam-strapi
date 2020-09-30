import React from "react";
import YouTube from "react-youtube";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import Logo from "../assets/logo.png";

const Description = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  let params = useParams();
  const id = params.id;
  const event = params.event;
  console.log(id, event);
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
          <p className="title-text">Title Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="dash"></div>
      </div>

      <div className="d-container">
        <div className="d-img">
          <LazyLoadImage
            alt={"banner"}
            effect={"blur"}
            width={"100%"}
            height={"60vh"}
            className="d-image"
            src={"https://source.unsplash.com/1280x720/?building"}
          />
        </div>
        <div className="bar">
          <div className="bar-items">
            <div className="bar-item">
              <p className="info">Date</p>
              <p className="info-detail">26 Sept,2020</p>
            </div>
            <div className="bar-item">
              <p className="info">Time</p>
              <p className="info-detail">2PM</p>
            </div>
            <div className="bar-item">
              <p className="info">Venue</p>
              <p className="info-detail">Grand Plaza</p>
            </div>
            <div className="bar-item">
              <p className="info">Fee</p>
              <p className="info-detail">Rs. 200</p>
            </div>
          </div>
        </div>
        <div className="d-content">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            excepturi nobis nisi ut, delectus recusandae fugiat aliquid beatae
            expedita dolor quis alias rerum, tempore blanditiis quasi inventore
            odio! Nulla, ad. lorem Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Fuga, ea corporis consectetur cum architecto
            soluta est suscipit facere quaerat quasi expedita! Provident hic,
            magnam a saepe laudantium repudiandae eius sunt?Illum, ad ab rem aut
            corporis dolor ea soluta tempora hic esse explicabo. Laudantium
            quasi doloribus temporibus eveniet fuga excepturi veniam magnam
            maxime facilis ad quam eos, reiciendis provident tenetur.
          </p>
        </div>
        <div className="video">
          <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
        <div className="center">
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
