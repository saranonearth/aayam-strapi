import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";

const GalleryFolders = () => {
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
        console.log("RESPONSE", response.data);
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

      {state.loading ? (
        <div className="center">
          <Loader />
        </div>
      ) : state.data ? (
        <div className="folder-list">
          {state.data.map((d, i) => (
            <div key={i} className="f-item">
              <div>
                <img
                  className="f-banner"
                  src={d.Images[0].url}
                  alt={d.FolderName}
                />
              </div>
              <div className="title-text">
                <Link className="c2 med-1" to={`/gallery/${d._id}`}>
                  {d.FolderName}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="center flex-it mt-4">
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

export default GalleryFolders;
