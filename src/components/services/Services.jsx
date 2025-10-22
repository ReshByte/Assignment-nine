import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const Services = () => {

  const {id} = useParams();

  const data = useLoaderData();

  const[details,setDetails] = useState([]);

  useEffect(()=>{
 const filteredData = data.find((singleData) => singleData.serviceId == id );

  setDetails(filteredData);
  },[data,id])

    const handleServices = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      
      e.target.reset();
    }

   const handleBookNow = () =>{
    toast.success('Submitted Successfully!')
    
   }


    return (
 <div className='space-y-10'>

    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={details.image}
          alt={details.serviceName}
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {details.category}
        </span>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-3 text-center">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          {details.serviceName}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {details.description}
        </p>

        {/* Provider Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Provided by{" "}
            <span className="font-semibold text-blue-700">
              {details.providerName}
            </span>
          </p>
          <p className="text-xs text-gray-500">{details.providerEmail}</p>
        </div>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-6 px-2">
          <div>
            <p className="text-xl font-semibold text-blue-700">
              ${details.price} / day
            </p>
            <p className="text-sm text-gray-500">
              Slots: {details.slotsAvailable}
            </p>
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-lg">
              {"★".repeat(Math.floor(details.rating))}
              {"☆".repeat(5 - Math.floor(details.rating))}
            </span>
            <span className="text-lg font-semibold text-gray-700">
              {details.rating}
            </span>
          </div>
        </div>

        {/* Book Button */}
        <button className="btn btn-primary w-full mt-6 bg-blue-600 border-none hover:bg-blue-700 text-white text-lg font-semibold rounded-xl">
          Book Now
        </button>
      </div>
    </div>

         <form onSubmit={handleServices} className="hero bg-base-200   flex justify-center items-center ">

   


  <div className="hero-content flex-col lg:flex-row-reverse">
    <div  className="text-center lg:text-left">
      
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Type Your Name" required/>
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Type Your Email" required/>
         
          <button type='submit' onClick={handleBookNow} className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
      </div>
    </div>
  </div>
  
</form>
  
 </div>
    );
};

export default Services;