import React from 'react'
import Pizza from '../data/pizzas.json'
import Showdata from './showdata';

const pizza = () => {
  return (
    <div className='food-base'>
        <h1>Pizzas</h1>
        {Pizza.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default pizza