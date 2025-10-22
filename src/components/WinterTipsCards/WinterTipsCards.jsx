import React from "react";

const winterTips = [
  {
    id: 1,
    title: "Keep Your Pets Warm",
    description:
      "Provide warm bedding and cozy spots indoors. Use pet sweaters for outdoor walks in chilly weather.",
    image: "https://i.ibb.co/Y4mLRMvb/dog-1.jpg",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description:
      "Avoid salted sidewalks which can irritate paws. Use pet booties or paw balm to protect them from ice and cold.",
    image: "https://i.ibb.co/DgHY1YRB/pexels-freestockpro-1174081.jpg",
  },
  {
    id: 3,
    title: "Hydration & Nutrition",
    description:
      "Ensure pets have access to fresh water. Increase calorie intake slightly if pets are very active outdoors during winter.",
    image: "https://i.ibb.co/RT4n2k4q/puppy-care-wellness-guide-questions-featured.jpg",
  },
];

const WinterTipsCards = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto pt-40 px-4  ">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-10">
        Winter Care Tips for Pets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {winterTips.map((tip) => (
          <div
            key={tip.id}
            className=" bg-indigo-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {tip.title}
              </h2>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTipsCards;
