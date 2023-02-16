import { useState, useEffect } from "react";
import "./App.css";
import Confetti from "./Components/LoginPage/confetti";
import React from "react";
import Happy from "./happybd.mp3";

function App() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const linkCall = async () => {
    alert(
      "SURPRISE COMING UP HEHE!!! \n\n (and allow popups incase it gets blocked:D) just press ok"
    );
    await delay(1000);
    window.open(
      "https://youtu.be/zgQG0b-Isbk",
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <>
      <audio autoPlay>
        <source src={Happy} type="audio/mpeg" />
      </audio>
      <div className="topRow">
        <img src="https://media.tenor.com/MvPvyKfXVCwAAAAC/lucky-star-anime.gif" />
        <h2>
          IT'S YO DAYY!!
          <br /> ITS JEE DAYYYY
        </h2>
        <img
          src="https://media.tenor.com/WLGGkDgMjekAAAAC/anime-yuru.gif"
          style={{ float: "right", margin: "0px" }}
        />
      </div>
      <div className="ConfettiPage">
        <Confetti />
        <h1>
          HAPPY 18TH BIRTHDAY <br />
          JEE
        </h1>
      </div>

      <div className="bottonRow">
        <img src="https://media.tenor.com/s7Kiv91_TLAAAAAC/anime-girl-cheering.gif" />
        <p>
          <a onClick={linkCall} target="_blank">
            I hope today brings you nothing but the best in life!
            <br /> To our birthday girl!!!
            <br />
            May you be blessed with the sweetest of dreams
          </a>
        </p>
        <img src="https://media.tenor.com/uTJCHlbtWJUAAAAM/yay-anime.gif" />
      </div>
    </>
  );
}

export default App;
