import React, { useState } from "react";
import './Carousel.css' // Add styles for better visuals


const Carousel = ({photo1,photo2,photo3}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    photo1,
    photo2,
    photo3
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;