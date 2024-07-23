import React from "react";
import Carousel from "../elements/Carousel.js";
import fathers_day1 from "../../assets/img/fathers_day1.png";
import fathers_day2 from "../../assets/img/fathers_day2.png";
import fathers_day3 from "../../assets/img/fathers_day3.png";
import fathers_day4 from "../../assets/img/fathers_day4.png";

const items = [
  <img src={fathers_day1} alt="Slide 1" />,
  <img src={fathers_day2} alt="Slide 2" />,
  <img src={fathers_day3} alt="Slide 3" />,
  <img src={fathers_day4} alt="Slide 4" />,
];

const Display_Carousel = () => (
  <div className="container">
    <h2 className="title">
      Home-Father's Day Gift Hampers: Unique & Thoughtful Gifts for Dad
    </h2>
    <Carousel items={items} />
  </div>
);

export default Display_Carousel;
