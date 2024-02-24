import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../styles/SecondNav.css";
import { ImSearch } from "react-icons/im";
import NavSeven from "./NavSeven";
import BodySeven from "./BodySeven";
import Footer from "./Footer";

function SecondNav() {
  const [scroll, setScrool] = useState(false);
  const changeScroll = () => {
    setScrool(!scroll);
  };
  if (scroll == true) {
    return <NavSeven />;
  } else {
    return (
      <>
        <div className="secondNav">
          <div className="mainSecond">
            <div className="locationS">
              <h4>Location <br></br>
                <input className="countryInput" type="text" placeholder="Choose location" />
                <button className="wrong"><RxCross2></RxCross2></button>
              </h4>
            </div>
            <div className="people">
              <h4>Guest<br></br> 
              <input className="peopleInput" type="text" placeholder="Add Guests"/>
                <button className="right"><RxCross2></RxCross2></button>
              </h4>
            </div>
            <div className="button">
              <button className="searchButton" onClick={changeScroll}>
                <ImSearch></ImSearch> Search
              </button>
            </div>
          </div>
        </div>
        <BodySeven />
        <Footer />
      </>
    );
  }
}

export default SecondNav;
