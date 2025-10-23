import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const vets = [
  {
    id: 1,
    name: "Dr. Samantha Roy",
    specialization: "Veterinary Surgeon",
    bio: "10+ years of experience in small animal surgery and preventive care.",
    image: "https://i.ibb.co/bgMH9wb7/images.jpg",
  },
  {
    id: 2,
    name: "Dr. Arif Hossain",
    specialization: "Pet Nutritionist",
    bio: "Expert in animal diets and nutrition planning for healthy pets.",
    image: "https://i.ibb.co/x8rNfWpN/premium-photo-1723478407452-4a1e82164d94.jpg",
  },
  {
    id: 3,
    name: "Dr. Leena Das",
    specialization: "Animal Behaviorist",
    bio: "Specializes in training and behavioral therapy for pets.",
    image: "https://i.ibb.co/FkPVsSzN/fab412b6ab76e37bef5183fac58c4d2e.jpg",
  },
  {
    id: 4,
    name: "Dr. Tanvir Ahmed",
    specialization: "Emergency & Critical Care",
    bio: "Handles emergency cases with quick and efficient care.",
    image: "https://i.ibb.co/3y6ZmfNZ/Dr-Tanveer-2.jpg",
  },
];

const ExpertVetSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 120,
      once: true,
    });
  }, []);

  return (
    <section className="w-11/12 mx-auto px-4 py-20">
      <h1
        data-aos="fade-down"
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Meet Our Expert Vets 🩺
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {vets.map((vet, index) => (
          <div
            key={vet.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 text-center p-6"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-200"
            />
            <h2 className="text-xl font-semibold text-gray-800">{vet.name}</h2>
            <p className="text-indigo-600 font-medium mb-2">{vet.specialization}</p>
            <p className="text-gray-600 text-sm">{vet.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVetSection;
