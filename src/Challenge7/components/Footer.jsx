import React, { useContext } from 'react'
import { Context } from './NavSeven'
import "../styles/FooterSeven.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer() {
    const value = useContext(Context)

  return (
    <>
    <div className='footer' style={{background: value ? 'white': 'rgb(40, 40, 40)',color: value ? "black" : "white"}}>
        <div className="values">
        <p>&copy;2024 Correia JPV</p>
        </div>
        <div className="icons">
            <FaGithub />
            <FaLinkedin />
            <BsInstagram />
        </div>

    </div>
    </>
  )
}

export default Footer