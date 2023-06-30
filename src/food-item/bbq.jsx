import React from 'react'
import BBQ from '../data/bbqs.json'
import Showdata from './showdata';

const Bbq = () => { 
  return (
    <div className='food-base'>
        <h1>Barbeques</h1>
        {BBQ.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default Bbq