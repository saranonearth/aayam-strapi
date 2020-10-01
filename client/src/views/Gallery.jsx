import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Gallery = ({ props }) => {
  console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <p className="title-text">Gallery</p>
        </div>
        <div className="dash"></div>
      </div>

      <div className="container">
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?nature"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              ratione!
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?place"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              obcaecati.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?people"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              obcaecati.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?art"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
              molestias!
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?cars"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aliquid.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?food"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              voluptatem.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?cat"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aliquid.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?animal"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              voluptatem.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?cake"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aliquid.
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://source.unsplash.com/1600x900/?building"
                alt="people"
              />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              voluptatem.
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="button-dark">
          <p>View More.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
