import React from 'react';

const SignIn = () => {
    return (
        <div>
        <div className="hero text-orange-900 bg-base-200 min-h-screen">
  <div className="hero flex-col lg:flex-row-reverse">
    
    <div className="card bg-amber-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center pt-5 font-bold">Sign In now!</h1>
      <div className="card-body">
        <form  className="fieldset">
          <label className="label text-xl">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label text-xl">Password</label>
          <input type="password" className="input" placeholder="Password" />
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