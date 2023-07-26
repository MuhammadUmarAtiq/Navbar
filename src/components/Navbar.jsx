import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav]=useState(false)
    const clickHandler=()=>setNav(!nav)

    const[color,setColor]=useState(false)
    const colorHandler=()=>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    };
    window.addEventListener("scroll",colorHandler);
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/"> <h1>ReactJS</h1></Link>
<ul className={nav?"nav-menu active":"nav-menu"}>
    <li>
        <Link to="/" >Home</Link>
    </li>
    <li>
        <Link to="/project" >Project</Link>
    </li>
    <li>
        <Link to="/about" >About</Link>
    </li>
    <li>
        <Link to="/contact" >Contcat Us</Link>
    </li>
</ul>
<div className='hamburger' onClick={clickHandler}>
{
    nav ?<FaTimes size={20} style={{color:"white"}} />:<FaBars size={20} style={{color:"white"}} />
}
    
    
</div>

    </div>
  )
}

export default Navbar