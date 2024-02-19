import React from "react";
import cheers from "../images/cheers.jpg";
import "../Styles/HomeSix.css";
import understand from "../images/understand.svg";
import understandOne from "../images/understandOne.svg";
import understandThree from "../images/understandThree.svg";
import understandFour from "../images/understandFour.svg";
import wines from "../images/wineBottles.png";
import magazine from "../images/magazine.png";
import dropper from "../images/Dropper.png";
import cupoon from "../images/ticket.svg";
import gift from "../images/gift-coupon.svg";
import money from "../images/money.svg";
import scooter from "../images/scooter.svg";


function Home() {
  
  
  return (
    <>
      <div className="home">
        <div className="homeTwo">
          <div className="image">
            <img
              src={cheers}
              alt="cheers"
              style={{ width: "100%", height: "77vh", objectFit: "cover" }}
            />
          </div>

          <div className="understand">
            <h2>Understand how it works</h2>
            <p style={{ marginTop: "10px", fontSize: "15px" }}>
              At Clube Wine you receive, every month, 2 hand-picked labels from
              the best wineries in the world!
            </p>
            <div className="homeImage">
              <div className="first">
                <img src={understandOne} alt="understandingOne" />
                <h3>You choose!</h3>
                <p style={{ fontSize: "12px" }}>
                  There are 6 different Clubs, and you <br></br> choose the
                  WineBox that best suits <br></br> you.
                </p>
              </div>
              <div className="two">
                <img src={understand} alt="understandingTwo" />
                <h3>Curation</h3>
                <p style={{ fontSize: "12px" }}>
                  Our Winehunters receive samples and <br></br>carry out various
                  analyzes to select <br></br> the best wines.
                </p>
              </div>
              <div className="three">
                <img src={understandThree} alt="understandingThree" />
                <h3>Convenience</h3>
                <p style={{ fontSize: "12px" }}>
                  Every month, you receive your <br></br> WineBox at the
                  location of your <br></br> choice..
                </p>
              </div>
              <div className="fourth">
                <img src={understandFour} alt="understandingFour" />
                <h3>Enjoy!</h3>
                <p style={{ fontSize: "12px" }}>
                  Live incredible experiences and toast <br></br> to life with
                  the best wines.
                </p>
              </div>
            </div>
          </div>

          <div className="bodyThird">
            <h3>What goes inside your WineBox?</h3>
            <div className="thirdImages">
              <div className="bodyOne">
                <img src={wines} alt="wine bottle" />
                <div className="texts">
                  <p
                    style={{
                      color: "rgb(138, 37, 3)",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    2 wines
                  </p>
                  <p>
                    You will receive 2 new bottles <br></br>selected by our
                    WineHunters.
                  </p>
                </div>
              </div>
              <div className="bodyTwo">
                <img src={magazine} alt="magazine" />
                <div className="texts">
                  <p
                    style={{
                      color: "rgb(138, 37, 3)",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    1 magazine
                  </p>
                  <p>
                    Exclusive content for Members,
                    <br></br> such as pairings, tips and
                    <br></br>curiosities about the world of wine.
                  </p>
                </div>
              </div>
              <div className="bodyThree">
                <img src={dropper} alt="dropper" />
                <div className="texts">
                  <p
                    style={{
                      color: "rgb(138, 37, 3)",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    1 dropper
                  </p>
                  <p>
                    Every month a different art for
                    <br></br> you to collect and serve your wine
                    <br></br> without wasting a single drop!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeThree">
          <h1>As a Wine Member you guarantee exclusive benefits</h1>
          <div className="container">
          <div className="cupoon">
            <img src={cupoon} alt="cupoon" />
            <p>15% OFF on all purchases <br></br>  at Wine</p>
          </div>
          <div className="gift">
            <img src={gift} alt="gift" />
            <p>Giveaways and coupons <br></br> on  Refer Friends</p>
          </div>
          <div className="money">
            <img src={money} alt="money" />
            <p>3x more cashback <br></br>through WineUP</p>
          </div>
          <div className="scooty">
            <img src={scooter} alt="scooter" />
            <p>Differentiated delivery <br></br> fee</p>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
