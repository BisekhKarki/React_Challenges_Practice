import React, { useState } from "react";

import imgTshirt from "../img/tshirt.jpg";
import skirt from "../img/skirt.jpg";
import cap from "../img/cap_t.jpg";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

function HomeFive() {

  // For increasing the button value
  const [skirtTotal, setSkirtTotal] = useState(3);
  const [shirtTotal, setShirtTotal] = useState(3);
  const [capTotal, setCapTotal] = useState(3);


  // For incresing and decreasing the button value
  const [skirtValue, setSkirtValue] = useState(15);
  const [shirtValue, setShirtValue] = useState(60);
  const [capValue, setCapValue] = useState(30);

  // For discount offer 
  const [skirtOffer, setSkirtOffer] = useState(5);
  const [shirtOffer, setShirtOffer] = useState(1);

  const increaseSkirt = ()=>{
    setSkirtTotal(skirtTotal+1);
    let v = (skirtTotal * 5)+5;
    setSkirtValue(v);
    if(skirtTotal%2==1){
      setSkirtOffer(skirtOffer+5);
    }
  }

  const increaseShirt = ()=>{
    setShirtTotal(shirtTotal+1);
    let b = (shirtTotal * 20)+20;
    setShirtValue(b)
    console.log(b)
    setShirtOffer((shirtTotal*1)+1);
  }

  const increaseCap = ()=>{
    setCapTotal(capTotal+1);
    let m = (capTotal * 10)+10;
    setCapValue(m)
  }


  const decreaseSkirt = ()=>{
    
    let a = (skirtTotal * 5)-5;
    setSkirtValue(a);
    if(skirtTotal%2==1){
      setSkirtOffer(skirtOffer-5);
    }
    if(skirtTotal<1){
      let i =3
      setSkirtTotal(i);
    } else {
      setSkirtTotal(skirtTotal-1);
    }
  }

  const decreaseShirt = ()=>{
    let b = (shirtTotal * 20)-20;
    setShirtValue(b)
    setShirtOffer((shirtTotal*1)-1);
    if(shirtTotal<1){
      let j=3
      setShirtTotal(j);
    } else {
      setShirtTotal(shirtTotal-1);
    }
  }
  const decreaseCap = ()=>{
    let c = (capTotal * 10)-10;
    setCapValue(c)
    if(capTotal<1){
      let k=3
      setCapTotal(k);
    } else {
      setCapTotal(capTotal-1);
    }
  }



  
  let totalItems = skirtTotal + shirtTotal + capTotal;
  let totalAmount = skirtValue + capValue + shirtValue;
  let totalDiscount = skirtOffer + shirtOffer;
  let cost = totalAmount - totalDiscount;
  return (
    <>
      <div className="main">
        <div className="cart">
          <div className="box1">
            <p>Shopping cart</p>
            <div className="underline1"></div>
            <div className="shopping">
              <div className="details">
                <p>Product Details</p>
                <div className="img1">
                  <img src={imgTshirt} alt="tshirt" />
                  <div className="code1">
                    <span>Shirt</span>
                    <p>Product code X7R2OPX</p>
                  </div>
                </div>
                <div className="img2">
                  <img src={skirt} alt="tshirt" />
                  <div className="code2">
                    <span>Skirt</span>
                    <p>Product code X2G2OPZ</p>
                  </div>
                </div>
                <div className="img3">
                  <img src={cap} alt="tshirt" />
                  <div className="code3">
                    <span>Cap</span>
                    <p>Product code X3W2OPY</p>
                  </div>
                </div>
              </div>
              <div className="quantity">
                <p>Quantity</p>
                <div className="values">
                  <div className="one">
                    <button onClick={decreaseShirt } ><TiMinus /></button>
                    <p>{shirtTotal}</p>
                    <button  onClick={increaseShirt} ><FaPlus /></button>
                  </div>
                  <div className="two">
                    <button onClick={decreaseSkirt } ><TiMinus /> </button>
                    <p>{skirtTotal}</p>
                    <button onClick={increaseSkirt} >  <FaPlus /></button>
                  </div>
                  <div className="three">
                    <button  onClick={decreaseCap} ><TiMinus /></button>
                    <p>{capTotal}</p>
                    <button onClick={increaseCap}  ><FaPlus /></button>
                  </div>
                </div>
              </div>
              <div className="price">
                <p>Price</p>
                <div className="money">
                  <div className="p1">20€</div>
                  <div className="p2">5€</div>
                  <div className="p3">10€</div>
                </div>
              </div>
              <div className="total">
                <p>Total</p>
                <div className="money">
                  <div className="t1">{shirtValue}€</div>
                  <div className="t2">{skirtValue}€</div>
                  <div className="t3">{capValue}€</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order">
            <p>Order Summary</p>
            <div className="underline2"></div>
            <div className="items">
              <p>{totalItems} Items</p>
              <p>{totalAmount}€</p>
            </div>
            <div className="underline2"></div>
            <br></br>
            <span>Discounts</span>
            <div className="discount">
              <div className="disOne">
              <p>2x1 skirt offer</p>
              <p>{skirtOffer}€</p>
              </div>
              <div className="disTwo">
              <p>x3 shirt offer</p>
              <p>{shirtOffer}€</p>
              </div>
            </div>
            <div className="underline2"></div>
            <div className="final">
            <div className="underline2"></div>
            <div className="f">
            <p className="val">Total Cost</p>
            <p className="am">{cost}€</p>
            </div>
            <button className="check">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFive;
