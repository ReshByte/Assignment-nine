import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const {signIn,resetPassword} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();


    const handleLogin=(e)=>{
           e.preventDefault();

           const email = e.target.email.value;
           const password = e.target.password.value;

           signIn(email,password)
           .then(result => {
            const user = result.user;
           toast.success('Login toasted!')
            
            
           
            if(!user.emailVerified){
              toast('Please verify your email')
            }
            navigate(`${location.state? location.state : "/"}`)
            

           })
           .catch((error) => {
            toast.error(error.message)
           })
           
    }


    const handleForgetPassword = () =>{
  //  console.log('mail',emailRef);
    const email = emailRef.current.value;
    resetPassword(email)
    .then(()=>{
      toast.success('Please check your email');
    })
    .catch()
   
    }


    return (
          <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">


          <label className="label">Email</label>
          <input ref={emailRef} name="email" type="email" className="input" placeholder="Email" required/>
          
          
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>
           
           <div onClick={handleForgetPassword}><a className='link link-hover'>Forgot Password?</a></div>

          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

         

          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/register" className='text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
   
        </div>
    );
};

export default Login;