import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = () => {
  return (
    <div>
      <div className="p-card">
        <div className="p-card-img">
          <img
            src="https://via.placeholder.com/1280x720"
            alt="temp"
            className="p-card-i"
          />
        </div>
        <div>
          <p className="p-card-title">Lorem, ipsum dolor.</p>
        </div>
        <div className="p-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          dolores, odit at, accusamus labore quas ad, qui ipsa facere quasi
          quibusdam iure ipsam? Natus eius fugit impedit distinctio? Atque,
          accusamus.
        </div>
        <div className="center">
          <div className="button-2">
            <p className="vm">
              <Link className="v-b" to="/details/upcoming-events/0">
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
