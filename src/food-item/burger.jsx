import React from 'react'
import burgers from '../data/burgers.json'
import Showdata from './showdata';

const burger = () => {
  return (
    <div className='food-base'>
        <h1>Burgers</h1>
        {burgers.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default burger