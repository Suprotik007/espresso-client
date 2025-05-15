import React from 'react';

const CoffeeCards = ({coffee}) => {
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
      <button className="btn btn-outline">Edit</button>
      <button className="btn btn-outline">Delete</button>
      
    </div>
</div>
        </div>
    );
};

export default CoffeeCards;