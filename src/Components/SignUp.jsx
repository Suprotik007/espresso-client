import React, { use } from 'react';
import { AuthContext } from './AuthContext';

const SignUp = () => {
    const {createUser}=use(AuthContext)
    // console.log(createUser);

    const handleSignUp=e=>{
        e.preventDefault()
        const form=e.target
        const formData=new FormData(form)

        const{email,password,...userProfile}=Object.fromEntries(formData.entries())
        // const email=formData.get('email')
        // const password=formData.get('password')
        console.log(email,password,userProfile);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);

            fetch('http://localhost:3000/users',{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('after profile save',data);
                
            })
            
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }
    
    return (
        <div>
            <div>
        <div className="hero text-orange-900 bg-base-200 min-h-screen">
  <div className="hero flex-col lg:flex-row-reverse">
    
    <div className="card bg-amber-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center pt-5 font-bold">Sign Up!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label text-xl " >Name</label>
          <input type="text" className="input text-amber-50" name='name' placeholder="Name" />
          <label className="label text-xl " >Phone</label>
          <input type="number" className="input text-amber-50" name='phone' placeholder="Phone" />
          <label className="label text-xl " >Address</label>
          <input type="text" className="input text-amber-50" name='address' placeholder="Address" />
          <label className="label text-xl " >Photo</label>
          <input type="text" className="input text-amber-50" name='photo' placeholder="Photo URL" />
          <label className="label text-xl " >Email</label>
          <input type="email" className="input text-amber-50" name='email' placeholder="Email" />
          <label className="label text-xl">Password</label>
          <input type="password" className="input text-amber-50" name='password' placeholder="Password" />
          {/* <div><a className="link link-hover text-xl">Forgot password?</a></div> */}
          <button  className="btn btn-neutral mt-4">Sign Up </button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SignUp;