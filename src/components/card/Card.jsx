import React from 'react';
import { Link } from 'react-router';

const Card = ({category}) => {
  
    
    
    return (
<div className="flex flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 max-w-sm w-full mx-auto">
  {/* IMAGE */}
  <img
    src={category.image}
    alt={category.serviceName}
    className="w-full h-48 sm:h-56 md:h-64 object-cover"
  />

  {/* CONTENT */}
  <div className="flex flex-col flex-grow p-4">
    <h2 className="text-xl font-bold mb-2 text-slate-900">{category.serviceName}</h2>

    {/* Rating */}
    <div className="flex items-center mb-2">
      <span className="text-yellow-400 mr-2">
        {'★'.repeat(Math.floor(category.rating))}
        {'☆'.repeat(5 - Math.floor(category.rating))}
      </span>
      <span className="text-slate-700 text-sm">{category.rating.toFixed(1)}</span>
    </div>

    {/* Price */}
    <p className="text-slate-800 font-semibold mb-4 text-lg">Price: ${category.price}</p>

    {/* Button */}
    <Link
      to={`/services/${category.serviceId}`}
      className="mt-auto w-full inline-flex justify-center items-center bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white py-2 px-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      View Details
    </Link>
  </div>
</div>




    );
};

export default Card;