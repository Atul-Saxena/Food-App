import React from 'react'
import '../stylesheets/showdata.css'

const Showdata = ({img,price,dsc,name,country,rate}) => {
  return (
    <div className="data">
        <div className="food-data">
            <img src={img} alt="" />
            <div className="datainfo">
                <h1>₹{price}/-</h1>
                <h2>{dsc}</h2>
                <h2>Shop name: {name}</h2>
                <h2>Location: {country}</h2>
                <h2>Ratings: {rate}</h2>
            </div>
        </div>
    </div>
  )
}

export default Showdata