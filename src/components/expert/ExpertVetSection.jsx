import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Samantha Roy",
    specialization: "Veterinary Surgeon",
    bio: "10+ years of experience in small animal surgery and preventive care.",
    image: "https://i.ibb.co.com/bgMH9wb7/images.jpg",
  },
  {
    id: 2,
    name: "Dr. Arif Hossain",
    specialization: "Pet Nutritionist",
    bio: "Expert in animal diets and nutrition planning for healthy pets.",
    image: "https://i.ibb.co.com/x8rNfWpN/premium-photo-1723478407452-4a1e82164d94.jpg",
  },
  {
    id: 3,
    name: "Dr. Leena Das",
    specialization: "Animal Behaviorist",
    bio: "Specializes in training and behavioral therapy for pets.",
    image: "https://i.ibb.co.com/FkPVsSzN/fab412b6ab76e37bef5183fac58c4d2e.jpg",
  },
  {
    id: 4,
    name: "Dr. Tanvir Ahmed",
    specialization: "Emergency & Critical Care",
    bio: "Handles emergency cases with quick and efficient care.",
    image: "https://i.ibb.co.com/3y6ZmfNZ/Dr-Tanveer-2.jpg",
  },
];

const ExpertVetSection = () => {
  return (
    <div className="w-11/12 mx-auto   px-4">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-10">
        Meet Our Expert Vets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 text-center p-6"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h2 className="text-xl font-semibold text-gray-800">{vet.name}</h2>
            <p className="text-blue-600 font-medium mb-2">{vet.specialization}</p>
            <p className="text-gray-600 text-sm">{vet.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVetSection;
