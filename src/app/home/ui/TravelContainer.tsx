import React, { useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/image-1.jpg";
import Image2 from "@/assets/image-2.jpg";
import Image3 from "@/assets/image-3.jpg";
import Image4 from "@/assets/image-4.jpg";

export const TravelContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <section>
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index}>
              <Image
                alt="travel images"
                src={img} 
                className="exact-image"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>
          ))}
        </div>
        <button
          id="prevBtn"
          onClick={handlePrev}
          className={currentIndex === 0 ? "disabled" : ""}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          id="nextBtn"
          onClick={handleNext}
          className={currentIndex === images.length - 1 ? "disabled" : ""}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};
