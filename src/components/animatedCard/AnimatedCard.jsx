
import 'animate.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      offset: 100,    // scroll offset before animation starts
      easing: "ease-in-out", // smooth animation
      once: true,     // animate only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10">
      <h1
        data-aos="fade-up"
        className="text-4xl font-bold text-blue-700"
      >
        Welcome to WarmPaws 🐾
      </h1>

      <p
        data-aos="zoom-in"
        className="text-lg text-gray-600 max-w-md text-center"
      >
        Keep your furry friends warm and safe this winter with our caring tips and services.
      </p>

      <img
        data-aos="flip-right"
        src="https://i.ibb.co/RT4n2k4q/puppy-care-wellness-guide-questions-featured.jpg"
        alt="Cute Puppy"
        className="w-64 h-64 object-cover rounded-xl shadow-lg"
      />

      <button
        data-aos="fade-up"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default AnimatedCard;
