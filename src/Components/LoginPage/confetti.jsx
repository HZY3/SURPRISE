import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);
  {
  }
  return (
    <>
      <ReactConfetti
        width={innerWidth}
        height={innerHeight}
        z-index={1}
        numberOfPieces={1000}
        gravity={0.08}
        friction={1}
      />
    </>
  );
};

export default Confetti;
