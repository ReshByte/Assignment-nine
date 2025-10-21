import React from 'react';
import { NavLink } from 'react-router';
import userIcon from "../../assets/user.png";
import pawsIcon from "../../assets/paws.jpg"

const Header = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto py-5">
       <div>
          <img className='rounded-full w-15 h-15' src={pawsIcon} alt="" />
       </div>


      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={userIcon} alt="" />
          <button className='btn '>Login</button>
      </div>
    </div>
    );
};

export default Header;