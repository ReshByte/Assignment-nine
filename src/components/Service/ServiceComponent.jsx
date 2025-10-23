import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import { toast } from 'react-toastify';

const ServiceComponent = () => {

    const data = useLoaderData();


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
        <div >
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto py-30'>
             {data.map(single => <ServiceCard single={single}></ServiceCard>)}
           </div>



      <div className='py-10 pt-0'>
          <form onSubmit={handleServices} className="hero flex justify-center ">

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
        </div>
    );
};

export default ServiceComponent;