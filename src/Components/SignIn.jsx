import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthContext';

const SignIn = () => {
  const {signInUser}=use(AuthContext)

  const handleSignIn=e=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password);

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      
      const signInInfo={
        email,
        lastSignInTime: result.user?.metadata?.lastSignInTime
      }
      
       fetch('http://localhost:3000/users',{
                method: "PATCH",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('after updated patch',data);
                
            })
    })
    .catch(error=>{
      console.log(error);
      
    })
    
  }
    return (
        <div>
        <div className="hero text-orange-900 bg-base-200 min-h-screen">
  <div className="hero flex-col lg:flex-row-reverse">
    
    <div className="card bg-amber-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center pt-5 font-bold">Sign In now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn}  className="fieldset">
        
        <label className="label text-xl " >Email</label>
          <input type="email" className="input text-amber-50" name='email' placeholder="Email" />
          <label className="label text-xl">Password</label>
          <input type="password" className="input text-amber-50" name='password' placeholder="Password" />
          <div><a className="link link-hover text-xl">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;