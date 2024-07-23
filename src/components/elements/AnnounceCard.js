import React from "react";

const AnnounceCard = ({ cardItem, key }) => {
  return (
    <div className="aboutUs" key={key}>
      <div className="aboutUsImg">
        <img src={cardItem.img} />
      </div>
      <h2>{cardItem.title}</h2>
      <p>{cardItem.description}</p>
    </div>
  );
};

export default AnnounceCard;
