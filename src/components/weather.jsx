import React, { useState } from 'react'
import axios from 'axios';

const Weather = () => {
    const [values,setvalue] = useState({});
    const [city,setcity] = useState("");
    const URL = `https://api.openweathermap.org/data/2.5/weather`;
    const KEY = 'efc29810c922e83431e52a271fd9a291';
    const fetchdata = async({city})=>{
        const {data} = await axios.get(URL,{
            params:{
                q: city,
                units:'metric',
                appid :KEY
            },
        });
        return data;
    }

    const search = async(e)=>{
        if(e.key === 'Enter') {
            const data = await fetchdata({city});
            
            setvalue(data);
            setcity('');
        }
    }
    return (
        <div className="weather">
            <input type="search"  value={city} onChange={(e)=>{setcity(e.target.value)}} onKeyPress={search}/>
            <h4>{values}</h4>
        </div>
    )
}

export default Weather