import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee=e=>{
        e.preventDefault()
        console.log('added');
        const form=e.target
        const formData=new FormData(form)
        const newCoffee=Object.fromEntries(formData.entries())
        console.log(newCoffee);
        
        fetch('http://localhost:3000/coffees',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        
        .then(res=>res.json())
        .then(data=>{
            console.log('after adding to mongodb',data);
            
        })
    }
    return (
        <div>
              <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
<h1 className='text-6xl'>Add Coffee</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} > 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder=" Enter Coffee Name" />
  <label className="label">Supplier</label>
  <input type="text" name='Supplier' className="input w-full" placeholder="Enter Coffee Supplier" />
  <label className="label">Category</label>
  <input type="text" name='Category' className="input w-full" placeholder="Enter Category" />

      
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

 <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="Enter Quantity" />
<label className="label">Taste</label>
  <input type="text" name='taste' className="input w-full" placeholder="Enter Taste Name" />
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
  
</fieldset>
 
                </div>

               <fieldset className="fieldset mt-6 bg-base-200 border-base-300 rounded-box  border p-4">
    <label className="label">Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
 </fieldset> 
                
                <div className='mt-6'>
                    <button className="btn text-black bg-[#D2B48C] btn-block">Add Coffee</button>
                </div>
              
            
            </form>
        </div>
        </div>
    );
};

export default AddCoffee;