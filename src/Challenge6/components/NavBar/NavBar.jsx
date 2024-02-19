import React, { useState } from 'react'
import "../../Styles/Nav.css"
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import logoNav from "../../images/wineBlackLogo.svg"
import NavLogo from "../../images/wine.svg"
import { Link } from 'react-router-dom';



function NavBar() {
    
    const [Changes, setChange] = useState(true);
    const change = ()=>{
        setChange(!Changes);
    }
    
  return (
    <>
    <div className='nav' style={{backgroundColor: Changes ? 'white' : 'rgb(78, 26, 61)'
    , borderBottom :Changes ? '0.5px solid black' : '0.5px solid white'}}>
        <div className="leftNav">
            <div className="logo">
                <img src={Changes ? logoNav : NavLogo} alt='Wine logo'  />
            </div>
            <div className="navLists" >
                <ul  >
                   <li ><Link to={"/"} style={{color: Changes ? 'black' : "white" }} >HOME</Link></li>
                   <li><Link to={"/club"} style={{color: Changes ? 'black' : "white" }} >CLUB</Link></li>
                   <li><Link to={"/store"} style={{color: Changes ? 'black' : "white" }}  > STORE</Link></li>
                   <li><Link to={"/producers"} style={{color: Changes ? 'black' : "white" }}  >PRODUCERS</Link></li>
                   <li><Link to={"/offers"} style={{color: Changes ? 'black' : "white" }} >OFFERS</Link></li> 
                   <li><Link to={"/events"} style={{color: Changes ? 'black' : "white" }}  >EVENTS</Link></li>
                </ul>
            </div>
        </div>
        <div className="rightNav">
            <button onClick={change} className='navBtn' style={{color: Changes ? 'black' : "white" }}>
                {Changes ? <BsFillMoonFill /> : <FiSun />}
            </button>
        </div>
    </div>
    </>
  )
}

export default NavBar

