import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/640px-FMovies_Logo.png"
import "../styles/NavEight.css"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';


function NavbarEight() {

    const [inputValue, setInput] = useState("");

    function changeInput(e){
        setInput(e.target.value)

    }

  return (
   <>
   <div className="navEight">
    <div className="nav">
        <div className="eight">
        <div className="logo">
            <img src={logo} alt='logo' className='l' />
        </div>
        <div className="navigation">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/home"} >Movies</Link></li>
            <li><Link to={"/tvSeries"} >Series</Link></li>
        </div>
        </div>
        <div className="search">
            <input  type='text' placeholder='Search' className='movieInput' value={inputValue} onChange={(e)=>changeInput(e)} />
            <button className='searchButton'><FaSearch /></button>
        </div>
    </div>
    </div>
   </>  
  )
}

export default NavbarEight