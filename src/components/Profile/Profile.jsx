import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from '../../assets/user.png'
import { Link } from 'react-router';

const Profile = () => {

    const{user} =use(AuthContext);
    return (
        <div className='space-y-5'>
           <h1 className='text-center text-2xl border-b-1 border-green-300 py-3'>User Information</h1>
          <div className='border-2 border-green-500  text-center space-y-5 py-5 w-3/12 mx-auto rounded-2xl'>
             
           <img className='w-15 h-15 rounded-full mx-auto ' src={`${user? user.photoURL : userIcon }`} alt="" />
           <p className='font-semibold '>Username: {`${user? user.displayName : "No user" }`} </p>
           <Link to="/update" className='btn btn-success '>Update Profile</Link>
          </div>
        </div>
    );
};

export default Profile;