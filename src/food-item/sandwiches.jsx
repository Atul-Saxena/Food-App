import React from 'react'
import Sandwich from '../data/sandwiches.json'
import Showdata from './showdata';

const Sandwiches = () => { 
  return (
    <div className='food-base'>
        <h1>Sandwiches</h1>
        {Sandwich.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default Sandwiches