import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { auth, AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

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

    const handleGoogleSignIn = ()=>{
      signInWithPopup(auth,provider)
      .then((result)=>{
        console.log(result);
        
      })
      .catch((error)=>{
        console.log(error);
        
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

          {/* Google */}
<button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-2">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

         

          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/register" className='text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
   
        </div>
    );
};

export default Login;