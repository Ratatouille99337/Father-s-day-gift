import React from "react";
import "../../assets/scss/Hampercard.scss";
const HamperCard = ({ hampercardItem, key }) => {
  return (
    <div className="hamperCardItem" key={key}>
      <div className="hamperCardItemTitle">{hampercardItem.title}</div>
      <div className="hamperCardItemContent">{hampercardItem.content}</div>
    </div>
  );
};

export default HamperCard;
