import React from "react";
import Partner from "../assets/NBT.jpg";
const Partners = () => {
  const list = [
    {
      image: Partner,
    },
  ];
  return (
    <div className="partner-list">
      {list.map((e, i) => (
        <div key={i}>
          <img src={e.image} className="partner-image" alt="partner-icon" />
        </div>
      ))}
    </div>
  );
};

export default Partners;
