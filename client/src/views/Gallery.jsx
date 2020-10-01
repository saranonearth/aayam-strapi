import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";
const Gallery = ({ props }) => {
  console.log(props);

  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/galleries`);
        console.log(response.data);
        if (!isCancelled) {
          setState({
            ...state,
            data: response.data[0],
            loading: false,
          });
        }
      } catch (error) {
        setState({
          ...state,
          data: null,
          loading: false,
        });
      }
    };

    fetchData();
    return () => {
      isCancelled = true;
    };
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
