import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import _ from "../config";
import ReactMarkdown from "react-markdown";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";

const BlogView = () => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  let params = useParams();
  const id = params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/blogs/${id}`);
        console.log(response.data);
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

        {state.loading ? (
          <div className="center mt-4">
            <Loader />
          </div>
        ) : state.data ? (
          <>
            <div className="d-container mt-b">
              <div className="d-img">
                <LazyLoadImage
                  alt={state.data.Title}
                  effect={"opacity"}
                  width={"100%"}
                  height={"60vh"}
                  className="d-image"
                  src={state.data.Banner.url}
                />
              </div>

              <div className="d-content">
                <div className="description">
                  <ReactMarkdown source={state.data && state.data.Content} />
                </div>
              </div>
            </div>
            <div className="center">
              <Link to="/blog">
                <button type="submit" className="submit-btn">
                  Read More
                </button>
              </Link>
            </div>
          </>
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
  );
};

export default BlogView;
