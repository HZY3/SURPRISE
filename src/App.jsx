import { useState, useEffect } from "react";
import "./App.css";
import Confetti from "./Components/LoginPage/confetti";
import React from "react";
import Happy from "./happybd.mp3";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    if (count === 10) {
      window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
    } else if (count === 20) {
      window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
    } else if (count === 30) {
      window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
    }
  }, [count]);

  const linkCall = async () => {
    alert(
      "SURPRISE COMING UP HEHE!!! \n A nice song that you would like to hear  \n\n (and allow popups incase it gets blocked:D) just press ok"
    );
    await delay(1000);
    window.open("https://youtu.be/pIgZ7gMze7A", "_blank");
  };

  return (
    <div className="wholePage">
      <Confetti />
      <audio autoPlay>
        <source src={Happy} type="audio/mpeg" />
      </audio>
      <div className="topRow">
        <img src="https://media.tenor.com/MvPvyKfXVCwAAAAC/lucky-star-anime.gif" />
        <h2>
          IT'S YO DAYY!!
          <br /> ITS JEE DAYYYY
          <br /> <span>(Theres a small easter egg if u can find it :P!!)</span>
        </h2>
        <img
          src="https://media.tenor.com/WLGGkDgMjekAAAAC/anime-yuru.gif"
          style={{ float: "right", margin: "0px" }}
        />
      </div>
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <a className="middleText" onClick={() => setCount(count + 1)}>
          <h1>
            HAPPY 18TH BIRTHDAY <br />
            JEE
          </h1>
        </a>
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
    </div>
  );
}

export default App;
