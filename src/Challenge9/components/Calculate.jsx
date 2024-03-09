import React, { useState } from "react";
import "../Styles/Calc.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import buttons from "../Button";

function Calculate() {
  const [background, setBackground] = useState(true);
  const [previous, setPrevious] = useState("");
  const [present, setPresent] = useState("");

  const changeValue = (number, id, use) => {
    console.log("ID: ", id);
    console.log("Value: ", number);
    console.log("\n");
    console.log(number)

    if (use === "Clear All") {
      setPresent([]);
    } else if (use === "Back") {
      setPresent((prevPresent) => prevPresent.slice(0, -1));
    }else if(use==='Total'){
      let result = eval(present)
      setTotal(result)
      setPrevious(`ANS ${present} = ${result}`);
      setPresent("");
    } else {
      setPresent((prevPresent)=> prevPresent+number);
    }
  };

  return (
    <div
      className="Calculator"
      style={{
        backgroundColor: background ? "white" : "black",
        color: background ? "black" : "white",
      }}
    >
      <div className="theme" style={{ color: background ? "black" : "white" }}>
        <p>Theme: {background ? "White" : "Black"}</p>
      </div>
      <div className="changeBackground">
        {background ? (
          <button
            className="dark"
            style={{ color: background ? "black" : "white" }}
            onClick={() => setBackground(false)}
          >
            <DarkModeIcon />
          </button>
        ) : (
          <button className="white" onClick={() => setBackground(true)}>
            <LightModeIcon />
          </button>
        )}
      </div>

      <div className="previousCalculate">
        <p>{previous}</p>
      </div>
      <div className="presentCalculate">
        <p>{present}</p>
      </div>
      <div className="buttonSection">
        <div className="top">
          {buttons.map((f, index) => {
            return (
              <div className="t">
                <button
                  onClick={() => changeValue(f.val, f.id, f.use)}
                  key={index}
                  style={{
                    backgroundColor:
                      f.id === 4 ||
                      f.id === 8 ||
                      f.id === 12 ||
                      f.id === 16 ||
                      f.id === 20
                        ? "rgb(10, 26, 241)"
                        : " rgb(192, 188, 188)",
                    color:
                      f.id === 4 ||
                      f.id === 8 ||
                      f.id === 12 ||
                      f.id === 16 ||
                      f.id === 20
                        ? "white"
                        : " black",
                    boxShadow: background && "0 5px 4px 0 rgb(192, 188, 188)",
                  }}
                >
                  {f.text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculate;
