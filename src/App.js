import React, { useRef, useState } from "react";
import Button from '@mui/material/Button';

export default function Countdown() {
  const [start,setStart]=useState(false);
  const [stop,setStop]=useState(false);
  const [reset,setReset]=useState(false);

  const [timer,setTimer]= useState(0);
  const startRef=useRef(0);
  const time=useRef();

  // const startButon =()=>{
  //   setStart(true)
  //   setStop(false)
  //   setReset(false)

  // }
  // const stopButon =()=>{
  //   setStop(true)
  //   setStart(false)
  //   setReset(false)

  // }
  // const resetButon =()=>{
  //   setReset(true)
  //   setStop(false)
  //   setStart(false)

  // }


 
  const startTime =()=>{
    time.current=setInterval(()=>{
      // startRef.current++;
      setTimer((prev)=>prev+1)
    },1000)
    setStart(true)
    setStop(false)
    setReset(false)
  }
    
    
  const stopTime = () => {
    clearInterval(time.current);
    setStop(true)
    setStart(false)
    setReset(false)
    
  }
  
  const resetTime = () => {
    stopTime();
    if (timer) {
      setTimer(0);
    }
    setReset(true)
    setStop(false)
    setStart(false)

  }

  return (
    <div>
      <h1>Stop watch...</h1>
      <p>Timer:{timer}s</p>
      <Button onClick={startTime} variant={start ? "contained" : "outlined"} color="secondary">Start</Button>
      <Button onClick={stopTime} variant={stop ? "contained" : "outlined"}>
      Stop
      </Button>
      <Button  onClick={resetTime} variant={reset ? "contained" : "outlined"} color="error">
        Reset
      </Button>
    </div>
  );
}
