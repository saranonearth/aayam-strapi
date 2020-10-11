import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import ReactGA from "react-ga";
import Empty from "../assets/empty.png";
const Gallery = () => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  let params = useParams();
  const id = params.id;
  ReactGA.pageview("/gallery");
  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/galleries/${id}`);

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
          <p className="title-text">{state.data && state.data.FolderName}</p>
        </div>
        <div className="dash"></div>
      </div>

      {state.loading ? (
        <div className="center mt-4">
          <Loader />
        </div>
      ) : state.data ? (
        <>
          <div className="container">
            {state.data.Images.map((d, i) => (
              <div key={i} className="gallery-container w-3 h-3">
                <div className="gallery-item">
                  <div className="image">
                    <img src={d.url} alt={d.caption} />
                  </div>
                  <div className="text">{d.caption}</div>
                </div>
              </div>
            ))}
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
  );
};

export default Gallery;
