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
import { ArcTitle } from "./ArcTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const [clicked] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [images] = useState([
    win01,
    win02,
    win03,
    win04,
    win05,
    win06,
    win07,
    win08,
    win09,
    win10,
    win11,
    win12,
    win13,
    win14,
    win15
  ]);

  const updateScore = image => {
    shuffle(images);

    if (clicked.includes(image)) {
      clicked.length = 0;
      setScore(0);
      setShake(true);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > topScore) {
        setTopScore(newScore);
      }
      clicked.push(image);
      setShake(false);
    }
  };
  const [sound, setSound] = useState(true);

  return (
    <div className="wrapper">
      <header className="header">
        <FontAwesomeIcon icon={faVolumeUp} />
        &nbsp;
        <FormControlLabel
          control={
            <Switch
              checked={sound}
              onChange={() => setSound(!sound)}
              color="primary"
            />
          }
          label=""
        />
      </header>
      <div className="aside left">
        <ArcTitle>CAFÉ KOFFIE</ArcTitle>
        <br />
        <div className="subTitle">- Clicky Game -</div>
        <br />
        <div className="instruction01">
          Click on a window to earn points, <br /> but don't click on any more
          than once!
        </div>

        <br />

        <div className="instruction02">
          {topScore == 0
            ? "Click an image to begin!"
            : shake
            ? "You guessed incorrectly!"
            : "You guessed correctly!"}
        </div>
        <br />
        <br />

        <br />
        <br />
        <br />
        <div className="currentScoreBox">
          <span className="scoretext">SCORE :</span>
          <div className="currentScore scoreNum">{score}</div>
        </div>
        <br />
        <div className="topScoreBox">
          <span className="scoretext">TOP SCORE :</span>
          <div className="topScore scoreNum">{topScore}</div>
        </div>
      </div>
      <div className="aside right">
        <div className={"window" + (shake ? " shake" : "")}>
          {images.map(image => (
            <Windowimg key={image} url={image} onClick={updateScore} />
          ))}
        </div>
        <div className="cafe">
          <img className="cafe" src={require("./images/cafe.jpg")} />
        </div>
      </div>
      <footer className="footer">
        <div className="copyrightContainer">
          <div className="copyrightLeft">Developer &nbsp;</div>
          <div className="copyrightRight">Sonmi Kos</div>
          <span className="collaboration">X</span>
          <div className="copyrightLeft">Illustration by&nbsp;&nbsp;</div>
          <div className="copyrightRight">Anne Olde Kalter</div>
        </div>
      </footer>
    </div>
  );
}

function Windowimg({ url, onClick }) {
  return <img className="winBox" src={url} onClick={() => onClick(url)} />;
}

export default App;