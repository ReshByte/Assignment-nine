import React, { useEffect, use } from "react";
import Card from "../card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const categoryPromise = fetch("/service.json").then((res) => res.json());

const CategoryData = () => {
  const categories = use(categoryPromise);

 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <div className="lg:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {categories.map((category, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <Card category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryData;
