import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const UpcomingEvents = () => {
  return (
    <div>
      <div class="triangle-left move"></div>
      <div className="banner banner-2">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>

        <div className="content">
          <p className="title-text">Upcoming Events</p>
        </div>
        <div className="dash"></div>
      </div>
      <div className="productions">
        <div className="production-list">
          <div className="p-card">
            <div className="p-card-img">
              <img
                className="p-card-i"
                src="https://via.placeholder.com/1280x720"
                alt="production-image"
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
                <p className="vm">View More.</p>
              </div>
            </div>
          </div>
          <div className="p-card">
            <div className="p-card-img">
              <img
                className="p-card-i"
                src="https://via.placeholder.com/1280x720"
                alt="production-image"
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
                <p className="vm">View More.</p>
              </div>
            </div>
          </div>

          <div className="p-card">
            <div className="p-card-img">
              <img
                className="p-card-i"
                src="https://via.placeholder.com/1280x720"
                alt="production-image"
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
                <p className="vm">View More.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
