import React, { use } from 'react';
import { Link, NavLink, useParams } from 'react-router';
import userIcon from "../../assets/user.png";
import pawsIcon from "../../assets/paws.jpg"
import { AuthContext } from '../provider/AuthProvider';
import { toast,  } from 'react-toastify';

const Header = () => {

  // const {id} = useParams()

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
        <div className="bg-[#faf5ee] flex justify-between items-center mx-auto py-5 px-20">
       <div>
          <img className='rounded-full w-15 h-15' src={pawsIcon} alt="" />
       </div>

    
      <div className="nav flex gap-5 font-semibold text-blue-700">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
     
      <div className="login-btn flex gap-5">
       
   <div className="relative group w-12 h-12">
  
  <img
    className="w-12 h-12 rounded-full object-cover cursor-pointer"
    src={user ? user.photoURL : userIcon}
    alt={user?.displayName || "User"}
  />

 
  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1
                   bg-black text-white text-xs font-medium px-2 py-1 rounded opacity-0
                   group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    {user?.displayName || "No Name"}
  </span>
</div>



         {
          user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> :  <Link to="/login" className='btn btn-primary '>Login</Link>
          }
            <Link to="/register" className='btn btn-primary'>Sign Up</Link>
      </div>
        
      
     
    </div>

    
    );
};


export default Header;