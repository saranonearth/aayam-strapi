import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Blog = () => {
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
          <p className="title-text">Blog</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="blog-container">
        <div className="banner-img">
          <div className="banner-b-content">
            <h1 className="banner-title-b">Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="blog-list">
          <div className="blog-items">
            <div className="blog-item">
              <div className="blog-item-image-holder">
                <img
                  className="blog-item-img"
                  src="https://source.unsplash.com/1920x1080/?building"
                  alt=""
                />
              </div>
              <div className="blog-item-content">
                <p className="b-i-tittle">Lorem ipsum dolor sit amet.</p>
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
                <p className="b-i-tittle">Lorem ipsum dolor sit amet.</p>
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
