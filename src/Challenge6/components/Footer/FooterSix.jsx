import React from "react";
import "../../Styles/Footer.css";
import W from "../../images/W.svg";

function FooterSix() {
  return (
    <>
      <div className="footer">
        <div className="firstLayer"></div>
        <div className="secondLayer"></div>
        <div className="main">
        <div className="content">
          <div className="leftFooter">
            <div className="top">
              <img src={W} alt="W" />
              <p style={{color:'rgb(197, 183, 183)'}}>
                W2W E-Commerce de Vinhos SA
                <br></br> CNPJ: 09.813.204/0002-05{" "}
              </p>
            </div>
            <div className="rightFooter">
            <p>
              IF YOU DRINK DO NOT DRIVE. ENJOY WITH MODERATION. THE SALE OF
              <br></br>ALCOHOLIC DRINKS IS PROHIBITED TO PEOPLE UNDER 18 YEARS
              OF AGE.
            </p>
          </div>
           
          </div>
        </div>
        <div className="bottom">
              <p>
                This project was developed for teaching purposes only. We do not
                have
                <br></br> rights to the Wine brand and its products and
                services.
              </p>
            </div>
        </div>
        
      </div>
    </>
  );
}

export default FooterSix;
