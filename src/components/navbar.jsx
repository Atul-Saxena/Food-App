import React, { useState } from 'react'
import { DiGhostSmall } from "react-icons/di";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const Navbar = () => {
  const [openmenu,closemenu] = useState(false);
  const [options,closeoptions] = useState(false);
  const change = ()=>closemenu(!openmenu);
  const show = ()=>closeoptions(!options);
  return (
    <>
    <div className="bar">
      <div className="barleft">
        <DiGhostSmall className='menubutton' onClick={change}/>
        <h2>Food heap</h2>
      </div>
      <div className="barright">
        <input type="search" name="search" id="search" placeholder='Search'/>
        <div className="account" onClick={show}></div>
        <FaAngleDown className='drop-menu' onClick={show}/>
      </div>
    </div>
    <div className={openmenu?"active-menu":"notactive-menu"}>
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>Food Filter</Link>
      <Link to={"/"}>Explore</Link>
      <Link to={"/"}>Menus</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Contact</Link>
    </div>
    <div className={options?"active-options":"notactive-options"}>
      <Link to={"/"}>Account</Link>
      <Link to={"/"}>Cart</Link>
      <Link to={"/"}>My orders</Link>
      <Link to={"/"}>Logout</Link>
    </div>
    </>
  )
}

export default Navbar