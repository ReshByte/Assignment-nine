import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { auth, AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

const updateProfile = () => {

    const {creatingUser,setUser,updateUser} = use(AuthContext);
    const [error,setError] = useState('');

    const handleRegister = (e) =>{
        e.preventDefault();
       const form = e.target;
       const name = form.name.value;
      const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;

      

      creatingUser(email,password)
      .then((result)=>{
        const users=result.user;
        updateUser({displayName:name, photoURL:photo}).then(()=>{
            setUser({...users , displayName:name, photoURL:photo});
            toast.success("Profile updated Successful");
           
           
        })
        
      
      })
      .catch((error)=>{  
        const errorMessage = error.message;
        toast(errorMessage);
         
      })
       

    }

    

    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Update Your Profile</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="name" required />


          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
        
       
           <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required />

          
          
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          
          <button type='submit' className="btn btn-neutral mt-4">Update Profile</button>
                 
          
        </fieldset>

       
      </form>
    </div>


   
        </div>
    );
};

export default updateProfile;