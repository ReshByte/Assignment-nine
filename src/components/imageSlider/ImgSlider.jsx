import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://i.ibb.co/84XVRPHm/walking.jpg',
    caption: 'Enjoy a winter walk with your furry friend!'
  },
  {
    src: 'https://i.ibb.co/8nbPBHF5/coldweather.jpg',
    caption: 'Keep your pets warm during the chilly days.'
  },
  {
    src: 'https://i.ibb.co/gLjP6wtJ/pawbed.jpg',
    caption: 'A cozy bed for your pet to relax.'
  }
];

export default function ImgSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex].src}
        alt="pet"
        className="w-full h-96 object-cover transition-transform duration-700 ease-in-out"
      />
      <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
        {images[currentIndex].caption}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
