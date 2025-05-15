import React from 'react';
import { Link } from 'react-router';

const CoffeeCards = ({coffee}) => {
    const handleDelete=(_id)=>{
        console.log(_id ,'deleted');

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after delete',data);
            
        })
        
    }


    return (
        <div className=''>
            <div className="card card-side   p-3 text-orange-950 bg-amber-100 shadow-sm ">
  <figure>
    <img
      src={coffee.photo} />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl">Name : {coffee.name}</h2>
    <p className='text-xl '>Supplier : {coffee.Supplier}</p>
    <p className='text-xl'> Taste : {coffee.Category}</p>
    <p className='text-xl'>Quantity : {coffee.quantity}</p>
    <p className='text-xl'>Category : {coffee.details}</p>
    
  </div>
  <div className="grid grid-cols-1 pt-5">
      <button className="btn btn-outline">View</button>
     <Link to={`/updateCoffee/${coffee._id}`}> <button className="btn btn-outline">Edit</button></Link>
      <button onClick={()=>handleDelete(coffee._id)} className="btn btn-outline">Delete</button>
      
    </div>
</div>
        </div>
    );
};

export default CoffeeCards;