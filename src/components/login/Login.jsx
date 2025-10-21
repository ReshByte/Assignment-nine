import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const {signIn} = use(AuthContext);


    const handleLogin=(e)=>{
           e.preventDefault();

           const email = e.target.email.value;
           const password = e.target.password.value;

           signIn(email,password)
           .then(result => {
            const user = result.user;
            console.log(user);
            

           })
           .catch((error) => {
            toast(error.message);
           })
           
    }


    return (
          <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">


          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required/>
          
          
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>
          

          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

         

          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/register" className='text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;