import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";
import _ from "../config";
import ReactGA from "react-ga";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";
const ReactMarkdown = require("react-markdown");

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

  const [state, setState] = useState({
    data: null,
    loading: true,
  });
  ReactGA.pageview(`${id}`);
  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/${event}?PID=${id}`);

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
      <div className="banner banner-2">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>

        <div className="content">
          <p className="title-text med">{state.data && state.data.Title}</p>
        </div>
        <div className="dash"></div>
      </div>

      {state.loading ? (
        <div className="center mt-4">
          <Loader />
        </div>
      ) : state.data ? (
        <>
          <div className="d-container">
            <div className="d-img">
              <LazyLoadImage
                alt={state.data.Title}
                effect={"blur"}
                width={"100%"}
                height={"60vh"}
                className="d-image"
                src={state.data.Banner.url}
              />
            </div>
            <div className="bar">
              <div className="bar-items">
                {state.data.Date ? (
                  <div className="bar-item">
                    <p className="info">Date</p>
                    <p className="info-detail">{state.data.Date}</p>
                  </div>
                ) : null}
                {state.data.Time ? (
                  <div className="bar-item">
                    <p className="info">Time</p>
                    <p className="info-detail">{state.data.Time}</p>
                  </div>
                ) : null}
                {state.data.Venue ? (
                  <div className="bar-item">
                    <p className="info">Venue</p>
                    <p className="info-detail">{state.data.Venue}</p>
                  </div>
                ) : null}
                {state.data.Fee ? (
                  <div className="bar-item">
                    <p className="info">Fee</p>
                    <p className="info-detail">Rs. {state.data.Fee}</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="d-content">
              <div className="description markdown">
                <ReactMarkdown
                  source={state.data.Content}
                  parserOptions={{ commonmark: true }}
                />
              </div>
            </div>
            {state.data.VideoLink ? (
              <div className="video">
                <YouTube videoId={state.data.VideoLink} opts={opts} />
              </div>
            ) : null}
            {state.data.RegisterLink ? (
              <div className="center">
                <button
                  className="register"
                  onClick={() => {
                    window.open(state.data.RegisterLink, "_blank");
                  }}
                >
                  Register
                </button>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="center flex-it">
          <div>
            <div>
              <img className="empty-icon mt-4" src={Empty} alt="empty-icon" />
            </div>

            <div>
              <p>No course found. Check again later </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
