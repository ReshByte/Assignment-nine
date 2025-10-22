import React from 'react';
import { Link } from 'react-router';

const Card = ({category}) => {
    console.log(category);
    
    
    return (
        <div className="bg-gray border-0 bg-indigo-100 border-400-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm">
    
      <img
        src={category.image}
        alt={category.serviceName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
      
        <h2 className="text-xl font-semibold mb-2">{category.serviceName}</h2>

        <div className="flex items-center mb-2">
          <span className="text-white-400 mr-2">
            {'★'.repeat(Math.floor(category.rating))}
            {'☆'.repeat(5 - Math.floor(category.rating))}
          </span>
          <span className="text-white-600 text-sm">{category.rating.toFixed(1)}</span>
        </div>

        
        <p className="text-gray-800 font-medium mb-4">Price: ${category.price}</p>

       
        <Link to={`/services/${category.serviceId}`} className="w-full btn btn-primary text-white py-2 px-2 rounded hover:bg-blue-600 transition-colors">
          View Details
        </Link>
      </div>
    </div>
    );
};

export default Card;