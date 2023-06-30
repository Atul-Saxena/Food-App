import React from 'react';
import Sausages from '../data/sausages.json';
import Showdata from './showdata';

const sausages = () => {
  return (
    <div className='food-base'>
        <h1>Sausages</h1>
        {Sausages.map(data =>{
            return(
                <div className="data">
                    <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                </div>
            )
        })}
    </div>
  )
}

export default sausages