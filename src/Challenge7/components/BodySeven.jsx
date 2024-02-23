import React from "react";
import { Context } from "./NavSeven";
import { useContext } from "react";
import datas from "../Data";
import "../styles/Seven.css";
import { MdOutlineStar } from "react-icons/md";

function BodySeven() {
  const bolVal = useContext(Context);
  let dis = (d) => {
    if (d === "SUPER HOST") {
      return (
        <span className="host" style={{ color: bolVal && "black" }}>
          {d}
        </span>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div
        className="main_container"
        style={{
          background: bolVal ? "white" : "rgb(40, 40, 40)",
          color: bolVal ? "black" : "white",
        }}
      >
        <div className="topic">
          <h1>All Stays</h1>
          <p>14 stays</p>
        </div>
        <div className="container">
          {datas.map((items, key) => {
            return (
              <>
                <div key={key} className="content">
                  <img src={items.img} />
                  <div className="details">
                    <div className="rooms">
                      <div className="abc">
                        {dis(items.host)}
                        <span>{items.p}</span>
                      </div>
                      <div className="ratings">
                        <span>
                          <MdOutlineStar className="star" />
                          {items.rate}
                        </span>
                      </div>
                    </div>
                    <div className="review">
                      <p>{items.text}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BodySeven;
