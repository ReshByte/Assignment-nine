import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from '../../assets/user.png'
import { Link } from 'react-router';

const Profile = () => {

    const{user} =use(AuthContext);
    return (
      <div className="space-y-6 py-8 bg-gray-50 dark:bg-slate-900 min-h-screen">

  <h1 className="text-center text-3xl font-bold text-slate-800 dark:text-white border-b-2 border-green-400 w-3/4 mx-auto pb-3">
    User Information
  </h1>

  <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900
                  border-2 border-green-300 dark:border-green-600 rounded-3xl shadow-xl p-8 w-96 mx-auto flex flex-col items-center space-y-4">

    <img 
      className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
      src={user ? user.photoURL : userIcon} 
      alt={user?.displayName || "User"} 
    />

    <p className="text-lg font-semibold text-slate-900 dark:text-white">
      Username: {user ? user.displayName : "No user"}
    </p>

    <Link 
      to="/update" 
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300"
    >
      Update Profile
    </Link>
  </div>
</div>

    );
};

export default Profile;