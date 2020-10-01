import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Logo from "../assets/logo.png";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";
const Events = () => {
  const [state, setState] = useState({
    data: "",
    loading: true,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/courses`);
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
          data: [],
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
          <p className="title-text">Courses</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="productions">
        {state.loading ? (
          <div className="center">
            <Loader />
          </div>
        ) : state.data.length > 0 ? (
          <div className="production-list">
            {state.data.map((e, i) => (
              <Card key={i} data={e} type={"courses"} />
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
  );
};

export default Events;
