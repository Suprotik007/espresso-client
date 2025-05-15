import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCards from './CoffeeCards';

const Home = () => {
    const coffees=useLoaderData()
    console.log(coffees);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                coffees.map(coffee=><CoffeeCards key={coffee._id} coffee={coffee} ></CoffeeCards>)
            }
        </div>
    );
};

export default Home;