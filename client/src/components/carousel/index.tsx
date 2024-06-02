import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 2 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <div className="relative">
      <div className="carousel overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-1/2 transition-transform duration-500 ease-in-out ${
              index >= currentSlide && index < currentSlide + 2
                ? 'transform translate-x-0'
                : index < currentSlide
                ? 'transform -translate-x-full'
                : 'transform translate-x-full'
            }`}
            style={{ left: `${(index % 2) * 50}%` }}
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
