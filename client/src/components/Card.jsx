import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  console.log(data);
  return (
    <div>
      <div className="p-card">
        <div className="p-card-img">
          <img src={data.Banner.url} alt={data.Title} className="p-card-i" />
        </div>
        <div>
          <p className="p-card-title">{data.Title}</p>
        </div>
        <div className="p-content">{data.Description}</div>
        <div className="center">
          <div className="button-2">
            <p className="vm">
              <Link className="v-b" to={`/details/${type}/${data.PID}`}>
                View More.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
