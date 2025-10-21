import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png";
import pawsIcon from "../../assets/paws.jpg"
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {

  const {user,logOut} = use(AuthContext);

  const handleLogOut = () => {
   
    logOut()
    .then(()=>{
      toast('Logout Successfully');
    })
    .catch((error)=>{
      console.log(error);
      
    })
   
  }

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
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon }`} alt="" />
         {
          user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> :  <Link to="/login" className='btn btn-primary '>Login</Link>
          }
      </div>

     
    </div>

    
    );
};


export default Header;