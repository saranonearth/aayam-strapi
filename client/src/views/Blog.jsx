import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Blog = () => {
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
          <p className="title-text">Blog</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="blog-container">
        <div className="blog-list">
          <div className="blog-items">
            <div className="blog-item">
              <div className="blog-item-image-holder">
                <img
                  className="blog-item-img"
                  src="https://via.placeholder.com/1920x1080"
                  alt=""
                />
              </div>
              <div className="blog-item-content">
                <Link className="b-i-tittle" to="/blog/0">
                  <p className="b-i-tittle">Lorem ipsum dolor sit amet.</p>
                </Link>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, ipsum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Non, dolores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Deserunt, sapiente.
                </p>
              </div>
            </div>
            <div className="blog-item">
              <div className="blog-item-image-holder">
                <img
                  className="blog-item-img"
                  src="https://source.unsplash.com/1920x1080/?leaf"
                  alt=""
                />
              </div>
              <div className="blog-item-content">
                <Link className="b-i-tittle" to="/blog/0">
                  <p className="b-i-tittle">Lorem ipsum dolor sit amet.</p>
                </Link>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, ipsum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Non, dolores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Deserunt, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
