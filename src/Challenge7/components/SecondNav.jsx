import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../styles/SecondNav.css";
import { ImSearch } from "react-icons/im";
import NavSeven from "./NavSeven";
import BodySeven from "./BodySeven";
import Footer from "./Footer";
import country from "../Country";
import { FaLocationDot } from "react-icons/fa6";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

function SecondNav( { back }) {
  const [scroll, setScrool] = useState(false);
  const changeScroll = () => {
    setScrool(!scroll);
  };


  //For hovering the country location and removing the guest hover
  const [hover,setHover] = useState(false);
  function changeHover(){
    setHover(!hover)
    setGuestHover("");
  }

//For input value of the country
  const [inuptValue, setInputValue] = useState("");
  const changeInput = (e)=>{
    setInputValue(e.target.value);
  }

  
// For the guest section and removing the location hover
const [guestHover,setGuestHover] = useState(true);
function changeGuestHover(){
setGuestHover(!guestHover);
setHover("");
newGuestValue()

}

// For increasing and decreasing the values of the guest 
const [adults, setAdults] = useState(0);
const [children, setChildren] = useState(0);
const [guestValue, setGuestValue] = useState("");

const increaseAdults = ()=>{
    setAdults(adults+1);
}

const decreaseAdults = ()=>{
    if(adults===0){
        setGuestHover("");
    }else {
        setAdults(adults-1);
    }   
}

const increaseChildren = ()=>{
    setChildren(children+1);
}

const decreaseChildren = ()=>{
    if(children===0){
        setGuestHover("");
    }else {
        setChildren(children-1);
    }
    
}
function newGuestValue(){
    const totalGuest = adults + children;
    setGuestValue(totalGuest)
}

function countryName(c,f){
  setInputValue(c+","+f);
}

  if (scroll === true) {
    return <NavSeven  country={inuptValue} people={guestValue}   />;
  } else {
    return (
      <>
      <div className="m"  style={{backgroundColor: back ? 'white' : 'black', color: back ? 'black' : 'white' }}>
      <div className="secondNav">
          <div className="mainSecond">
            <div className="locationS">
              <h4>Location <br></br>
                <input className="countryInput" type="text" placeholder="Choose location" 
                value={inuptValue} onChange={(e)=>changeInput(e)} onClick={changeHover} />
                <button className="wrong" onClick={()=>setInputValue("")}><RxCross2></RxCross2></button>
              </h4>
            </div>
            {hover && <div className="countryList" >
                {country.filter((nation) =>
                    nation.place.toLowerCase().includes(inuptValue.toLowerCase())
                    ).map((nation,key)=>{
                    return(
                        <>
                        <span key={key} onClick={()=> countryName(nation.place,nation.nation)} >
                        <FaLocationDot></FaLocationDot> {nation.place},{nation.nation}</span>
                        </>
                    )
                })}
            </div>}
            <div className="people">
              <h4>Guest<br></br> 
              <input className="peopleInput" type="text" 
              placeholder="Add Guests" 
              onClick={changeGuestHover}
              value={guestValue}
              />
                <button className="right" onClick={()=>setGuestValue("")} ><RxCross2></RxCross2></button>
              </h4>
            </div>
            {
                guestHover ? <div className="addingPeople">
                <div className="adults">
                    <h4>Adults</h4>
                    <p>Ages 13 or Above</p>
                    <div className="add">
                    <button onClick={decreaseAdults} ><CiSquareMinus ></CiSquareMinus></button> 
                    <p>{adults}</p> 
                    <button onClick={increaseAdults} ><CiSquarePlus></CiSquarePlus></button>
                    </div>
                </div>
                <br></br>
                <div className="childrens">
                    <h4>Children</h4>
                    <p>Ages 2 to 12</p>
                    <div className="childrenAdd">
                    <button onClick={decreaseChildren} ><CiSquareMinus ></CiSquareMinus></button>
                     <p>{children}</p> 
                     <button onClick={increaseChildren} ><CiSquarePlus></CiSquarePlus></button>
                    </div>
                    </div>
            </div>
        : null     
        }
            <div className="button">
              <button className="searchButton" onClick={changeScroll}>
                <ImSearch></ImSearch> Search
              </button>
            </div>
          </div>
        </div>
        <BodySeven />
        <Footer />
      </div>
        
      </>
    );
  }
}

export default SecondNav;
