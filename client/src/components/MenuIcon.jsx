import React from "react";

const MenuIcon = ({ changeShowNavbar, showNavbar }) => {
  return (
    <div className="m-wrapper">
      <div className="menu-icon">
        <div>
          {showNavbar ? (
            <i
              onClick={() => changeShowNavbar()}
              className="fas close-icon fa-times"
            ></i>
          ) : (
            <i
              onClick={() => changeShowNavbar()}
              className="fas fa-bars menu-bar"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
