import React, { use } from 'react';
import { Link, NavLink, useLoaderData, useParams } from 'react-router';
import userIcon from "../../assets/user.png";
import pawsIcon from "../../assets/paws.jpg"
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer,  } from 'react-toastify';

const Header = () => {


  const {user,logOut} = use(AuthContext);

  const handleLogOut = () => {
   
    logOut()
    .then(()=>{
      toast.success('Successfully logout!')
    })
    .catch((error)=>{
      console.log(error);
      
    })
   
  }

    return (
 <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-slate-900 shadow-md">
  <div className="container mx-auto flex justify-between items-center py-4 px-6 max-sm:flex-col max-sm:space-y-4">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src={pawsIcon} alt="Logo" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
      <span className="text-2xl font-bold tracking-wide text-blue-700">WarmPaws</span>
    </div>

    {/* Navigation Links */}
    <div className="nav flex gap-5 font-semibold max-sm:flex-wrap max-sm:justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 px-3 py-1 rounded-md transition-colors"
            : "hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 px-3 py-1 rounded-md transition-colors"
            : "hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 px-3 py-1 rounded-md transition-colors"
            : "hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
        }
      >
        My Profile
      </NavLink>
    </div>

    {/* User & Auth Buttons */}
    <div className="login-btn flex gap-3 items-center max-sm:flex-wrap max-sm:justify-center">

      {/* User Avatar with Tooltip */}
      <div className="relative group w-12 h-12">
        <img
          src={user ? user.photoURL : userIcon}
          alt={user?.displayName || "User"}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm cursor-pointer"
        />
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1
                         bg-blue-300 text-slate-900 text-xs font-medium px-2 py-1 rounded opacity-0
                         group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {user?.displayName || "No Name"}
        </span>
      </div>

      {/* Auth Buttons */}
      {user ? (
        <button
          onClick={handleLogOut}
          className="bg-blue-300 hover:bg-blue-400 text-slate-900 px-4 py-2 rounded-lg transition-colors duration-300 shadow-sm"
        >
          Logout
        </button>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-blue-300 hover:bg-blue-400 text-slate-900 px-4 py-2 rounded-lg transition-colors duration-300 shadow-sm"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-cyan-200 hover:bg-cyan-300 text-slate-900 px-4 py-2 rounded-lg transition-colors duration-300 shadow-sm"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  </div>
</div>






    
    );
};


export default Header;