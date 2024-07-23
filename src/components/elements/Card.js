import React, { useState } from "react";
import "../../assets/scss/Blogcard.scss";
const Card = ({ cardItem, key }) => {
  return (
    <div className="carditem" key={key}>
      <div
        className="cardImg"
        dangerouslySetInnerHTML={{
          __html: cardItem.img,
        }}
      ></div>
      <div className="cardDescription">
        <p>{cardItem.description}</p>
      </div>
    </div>
  );
};

export default Card;
