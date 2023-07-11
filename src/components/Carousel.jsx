import React, { useState, useRef } from "react";
import "tw-elements";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";

const featuredImages = [carousel1, carousel2, carousel3, carousel4];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const goToPreviousImage = () => {
    setTransition(true);
    setTimeout(() => {
      const newIndex =
        (currentIndex - 1 + featuredImages.length) % featuredImages.length;
      setCurrentIndex(newIndex);
      setTransition(false);
    }, 100); // Czas trwania animacji w milisekundach
  };

  const goToNextImage = () => {
    setTransition(true);
    setTimeout(() => {
      const newIndex = (currentIndex + 1) % featuredImages.length;
      setCurrentIndex(newIndex);
      setTransition(false);
    }, 100); // Czas trwania animacji w milisekundach
  };

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!startX) return;
    const difference = startX - event.clientX;
    if (difference > 50) {
      goToNextImage();
      setStartX(0);
    } else if (difference < -50) {
      goToPreviousImage();
      setStartX(0);
    }
  };

  return (
    <div
      className="w-full select-none relative "
      style={{ background: "gray" }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setStartX(0)}
      onMouseLeave={() => setStartX(0)}
    >
      <div
        className={`transition-opacity duration-200 ${
          transition ? "opacity-60" : "opacity-100"
        }`}
      >
        <img
          src={featuredImages[currentIndex]}
          alt=""
          style={{ width: "100%" }}
        />
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/30  hover:bg-white/50  group-focus:ring-white focus:outline-none"
        data-carousel-prev
        onClick={goToPreviousImage}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
        data-carousel-next
        onClick={goToNextImage}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span className="sr-only">Next</span>
      </button>
      <hr className="styledHr" style={{ height: 3 }} />
    </div>
  );
}
