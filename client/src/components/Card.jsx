import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  console.log(data);
  return (
    <>
      <div className="e-card">
        <div className="e-card-sec1">
          <div>
            <img
              className="event-image"
              src={data.Banner.url}
              alt={data.Title}
            />
          </div>
          <p className="card-title">{data.Title}</p>
          <p className="card-details">{data.Description}</p>
        </div>
        <div className="e-card-sec-2">
          <div className="btn-cont">
            <div className="view-more-btn">
              <Link className="v-b" to={`/details/${type}/${data.PID}`}>
                View More.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
