import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Services = () => {

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
        <form onSubmit={handleServices} className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div  className="text-center lg:text-left">
      
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Type Your Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Type Your Email" />
         
          <button type='submit' onClick={handleBookNow} className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
      </div>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</form>
    );
};

export default Services;