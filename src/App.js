import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";

export default function Countdown() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);

  const [timer, setTimer] = useState(0);
  const time = useRef();

  const startTime = () => {
    time.current = setInterval(() => {
      // startRef.current++;
      setTimer((prev) => prev + 1);
    }, 1000);
    setStart(true);
    setStop(false);
    setReset(false);
  };

  const stopTime = () => {
    clearInterval(time.current);
    setStop(true);
    setStart(false);
    setReset(false);
  };

  const resetTime = () => {
    // stopTime();
    setTimer(0);
    setReset(true);
    setStop(false);
    setStart(false);
  };

  return (
    <div>
      <h1>Stop watch...</h1>
      <p>Timer:{timer}s</p>
      <Button
        onClick={startTime}
        variant={start ? "contained" : "outlined"}
        color="success"
      >
        Start
      </Button>
      <Button onClick={stopTime} variant={stop ? "contained" : "outlined"} color="error">
        Stop
      </Button>
      <Button
        onClick={resetTime}
        variant={reset ? "contained" : "outlined"}
        color="warning"
      >
        Reset
      </Button>
    </div>
  );
}
