import React from "react";

const Partners = ({ data }) => {
  console.log("DATA", data);
  return (
    <div className="partner-list">
      {data.map((e, i) => (
        <div key={i}>
          <img
            src={e.partnerImage.url}
            className="partner-image"
            alt="partner-icon"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
