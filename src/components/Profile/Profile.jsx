import React from 'react';

const Profile = () => {
    return (
        <div className='space-y-5'>
           <h1 className='text-center text-2xl border-b-1 border-green-300 py-3'>User Information</h1>
          <div className='border-2 border-green-500  text-center space-y-5 py-5 w-3/12 mx-auto rounded-2xl'>
             
           <img className='w-15 h-15 rounded-full mx-auto ' src="https://i.ibb.co.com/3ygcwmyy/2.jpg" alt="" />
           <p className='font-semibold '>Username: Md.Redone-Nobi  </p>
           <button className='btn btn-success '>Update Profile</button>
          </div>
        </div>
    );
};

export default Profile;