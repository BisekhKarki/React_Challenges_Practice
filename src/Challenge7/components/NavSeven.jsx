import React, { useState } from "react";
import { createContext } from "react";
import BodySeven from "./BodySeven";
import { IoMoon } from "react-icons/io5";
import { ImSun } from "react-icons/im";
import logo from "../images/logo.png"
import { ImSearch } from "react-icons/im";
import "../styles/NavSeven.css"
import Footer from "./Footer";
import SecondNav from "./SecondNav";

export const Context = createContext(null);
export const NewBool = createContext(null);

function NavSeven() {
    
  const [change, setChange] = useState(false);

  const bolChange = ()=>{
    setChange(!change)
  }

  // For chnaging the component
 const [boolValue, setBoolValue] = useState(false);
  const changeBool = ()=>{
    setBoolValue(!boolValue)
  }

  // If true show the another nav else render the default navbar
  if(boolValue == true){
    return <SecondNav />
  } else {
    return (
      <NewBool.Provider value={boolValue} >
      <Context.Provider value={change}>
        
           <div className="nav" style={{backgroundColor: change ? 'white' : 'black'}}>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="navRight">
          <div className="changeButton">
            <button onClick={bolChange}  style={{color : change ? 'black' : 'white'}} >
              {change ? <IoMoon></IoMoon> : <ImSun></ImSun> }
            </button>
          </div>
          <div className="search" style={{border: change ? "2px solid white" : "2px solid rgb(70, 69, 69)"}}>
            <div className="choose">
                <p>Choose Location</p>
            </div>
            <div className="addPeople">
                <p>Add people</p>
            </div>
            <div className="searchBtn">
                <button onClick={changeBool}><ImSearch></ImSearch></button>
            </div>
          </div>
        </div>
      </div>
        <BodySeven  />
        <Footer />
      </Context.Provider>
      </NewBool.Provider>
    );
  }

 
}

export default NavSeven;
