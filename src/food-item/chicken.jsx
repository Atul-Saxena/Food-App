import React from 'react'
import Chicken from '../data/fried-chicken.json'
import Showdata from './showdata';

const chicken = () => {
  return (
    <div className='food-base'>
        <h1>Chicken</h1>
        {Chicken.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default chicken