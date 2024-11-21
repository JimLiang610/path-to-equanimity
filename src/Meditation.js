import { useState, useEffect } from "react";

function Meditation() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const second = setInterval(() => {
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(second);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(second);
  }, [seconds, minutes]);

  return (
    <div>
      <h1>
        {minutes}:{seconds}
      </h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Meditation;
