import React, { useState, useEffect } from "react";
import "../../assets/scss/Carousel.scss";

const messages = [
  "Happy Father's Day! Thank you for everything you do!",
  "Celebrating the best dad in the world. Happy Father's Day!",
  "Wishing you a day filled with love and happiness. Happy Father's Day!",
  "To the greatest dad, happy Father's Day!",
];

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#9664;
      </button>
      <div className="carousel-slide">
        <div className={`carousel-text text-animation-${currentIndex % 4}`}>
          {messages[currentIndex]}
        </div>
        <div className="carousel-images">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.props.src}
              alt={`Slide ${index + 1}`}
              className={`carousel-image image-animation-${index % 4} ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#9654;
      </button>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
