import React, { useState } from "react";
import "./App.css";
import win01 from "./images/win01.png";
import win02 from "./images/win02.png";
import win03 from "./images/win03.png";
import win04 from "./images/win04.png";
import win05 from "./images/win05.png";
import win06 from "./images/win06.png";
import win07 from "./images/win07.png";
import win08 from "./images/win08.png";
import win09 from "./images/win09.png";
import win10 from "./images/win10.png";
import win11 from "./images/win11.png";
import win12 from "./images/win12.png";
import win13 from "./images/win13.png";
import win14 from "./images/win14.png";
import win15 from "./images/win15.png";

function App() {
  return (
    <div className="wrapper">
      <header className="header">Header</header>
      <div className="aside left">
        <div className="title">CAFÉ KOFFIE</div>
        <br />
        <div className="subTitle">- CLICKY GAME -</div>
        <br />
        <div className="instruction01">
          Click on an image to earn points, <br /> but don't click on any more
          than once!
        </div>

        <br />

        <div className="instruction02">Click an image to begin!</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="currentScore">SCORE : </div>
        <br />
        <div className="topScore">TOP SCORE : </div>
      </div>
      <div className="aside right">
        <div className="topFloor"></div>

        <div className="windows"></div>
        <div className="cafe">
          <img className="cafe" src={require("./images/cafe.jpg")} />
        </div>
      </div>
      <footer className="footer">
        <div className="copyright">Footer</div>
      </footer>
    </div>
  );
}

export default App;
