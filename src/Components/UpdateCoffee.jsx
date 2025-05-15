import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
   const {_id,name,quantity,details,Category,taste,Supplier,photo}=useLoaderData()
    const handleUpdateCoffee = e=>{
    e.preventDefault()

    const  form=e.target 
    const formData=new FormData(form)
        const updatedCoffee=Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedCoffee)
        })
        
        .then(res=>res.json())
        .then(data=>{
            console.log('after updating to mongodb',data);
            
        })
 
}
    return (
        <div>
              <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
<h1 className='text-6xl'>Update Coffee</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee} > 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

  <label className="label" defaultValue={name}>Name</label>
  <input type="text" name='name' className="input w-full" placeholder=" Enter Coffee Name" />
  <label className="label"defaultValue={Supplier} >Supplier</label>
  <input type="text" name='Supplier' className="input w-full" placeholder="Enter Coffee Supplier" />
  <label className="label"defaultValue={Category}>Category</label>
  <input type="text" name='Category' className="input w-full" placeholder="Enter Category" />

      
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

 <label className="label" defaultValue={quantity}>Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="Enter Quantity" />
<label className="label"defaultValue={taste}>Taste</label>
  <input type="text" name='taste' className="input w-full" placeholder="Enter Taste Name" />
  <label className="label"defaultValue={details}>Details</label>
  <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
  
</fieldset>
 
                </div>

               <fieldset className="fieldset mt-6 bg-base-200 border-base-300 rounded-box  border p-4">
    <label className="label"defaultValue={photo}>Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
 </fieldset> 
                
                <div className='mt-6'>
                    {/* <button className="btn text-black bg-[#D2B48C] btn-block">Update Coffee</button> */}
                    <input type='submit' className='btn text-black bg-[#D2B48C] btn-block' value='Update Coffee' ></input>
                </div>
              
            
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;