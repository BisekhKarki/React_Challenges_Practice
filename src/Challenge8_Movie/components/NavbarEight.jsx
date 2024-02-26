import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/640px-FMovies_Logo.png"
import "../styles/NavEight.css"
import { FaSearch } from "react-icons/fa";
// import DefaultPage from './DefaultPage';

function NavbarEight() {

  return (

    <>
    <div className="navEight">
    <div className="nav">
        <div className="eight">
        <div className="logo">
            <img src={logo} alt='logo' className='l' />
        </div>
        <div className="navigation">
            <li><Link to={"/"}>Trending</Link></li>
            <li><Link to={"/home"} >Movies</Link></li>
            <li><Link to={"/genres"} > Genres</Link></li>
            <li><Link to={"/country"} >Country</Link></li>
            <li><Link to={"/tvSeries"} >Series</Link></li>
        </div>
        </div>
        <div className="search">
            <input  type='text' placeholder='Search' className='movieInput'/>
            <button className='searchButton'><FaSearch /></button>
        </div>
    </div>
    </div>
   
    </>
  )
}

export default NavbarEight