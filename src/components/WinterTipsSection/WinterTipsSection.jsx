import React, { useEffect } from "react";
import { FaSnowflake, FaPaw, FaDog, FaTemperatureHigh } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const tips = [
  {
    icon: <FaPaw size={30} className="text-indigo-500" />,
    title: "Protect Their Paws",
    description:
      "Keep your dog's paws dry and warm. Use booties or paw balm to prevent frostbite.",
  },
  {
    icon: <FaSnowflake size={30} className="text-indigo-500" />,
    title: "Keep Them Warm",
    description:
      "Provide insulated bedding indoors and limit exposure to extreme cold.",
  },
  {
    icon: <FaDog size={30} className="text-indigo-500" />,
    title: "Regular Grooming",
    description:
      "Brush your pet regularly. A clean coat helps retain body heat.",
  },
  {
    icon: <FaTemperatureHigh size={30} className="text-indigo-500" />,
    title: "Monitor Health",
    description:
      "Check your pet's behavior and health frequently. Cold can worsen certain conditions.",
  },
];

const WinterTipsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 120,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          data-aos="fade-down"
          className="text-4xl font-extrabold text-indigo-800 mb-4"
        >
          Winter Pet Safety Tips ❄️
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg"
        >
          Keep your furry friends safe and cozy this winter with these essential
          tips.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterTipsSection;
