
import React from 'react';
import { FaSnowflake, FaPaw, FaDog, FaTemperatureHigh } from 'react-icons/fa';

const tips = [
  {
    icon: <FaPaw size={30} className="text-blue-500" />,
    title: "Protect Their Paws",
    description: "Keep your dog's paws dry and warm. Use booties or paw balm to prevent frostbite."
  },
  {
    icon: <FaSnowflake size={30} className="text-blue-500" />,
    title: "Keep Them Warm",
    description: "Provide insulated bedding indoors and limit exposure to extreme cold."
  },
  {
    icon: <FaDog size={30} className="text-blue-500" />,
    title: "Regular Grooming",
    description: "Brush your pet regularly. A clean coat helps retain body heat."
  },
  {
    icon: <FaTemperatureHigh size={30} className="text-blue-500" />,
    title: "Monitor Health",
    description: "Check your pet's behavior and health frequently. Cold can worsen certain conditions."
  },
];

const WinterTipsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Winter Pet Safety Tips</h2>
        <p className="text-gray-600 mb-12">
          Keep your furry friends safe and cozy this winter with these essential tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterTipsSection;
