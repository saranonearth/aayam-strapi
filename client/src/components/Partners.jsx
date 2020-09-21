import React from "react";

const Partners = () => {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="partner-list">
      {list.map((e, i) => (
        <div key={i}>
          <img
            src={"https://via.placeholder.com/30x30"}
            className="partner-image"
            alt="partner"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
