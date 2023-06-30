import React from 'react'
import IceCream from '../data/ice-cream.json'
import Showdata from './showdata';

const Icecream = () => {
  return (
    <div className='food-base'>
        <h1>Ice Cream</h1>
        {IceCream.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default Icecream