import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";
import ReactGA from "react-ga";
const Blog = () => {
  ReactGA.pageview("/blog");
  const [state, setState] = useState({
    data: "",
    loading: true,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/blogs`);
        if (!isCancelled) {
          setState({
            ...state,
            data: response.data,
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
          {state.loading ? (
            <div className="center">
              <Loader />
            </div>
          ) : state.data ? (
            <div className="blog-items">
              {state.data.map((d, i) => (
                <div className="blog-item" key={i}>
                  <div className="blog-item-image-holder">
                    <img className="blog-item-img" src={d.Banner.url} alt="" />
                  </div>
                  <div className="blog-item-content">
                    <Link className="b-i-tittle" to={`/blog/${d._id}`}>
                      <p className="b-i-tittle">{d.Title}</p>
                    </Link>
                    <p className="description">{d.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="center flex-it">
              <div>
                <div>
                  <img className="empty-icon" src={Empty} alt="empty-icon" />
                </div>

                <div>
                  <p>No courses. Check again later </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
