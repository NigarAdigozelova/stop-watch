import React, { useRef, useState } from "react";
import Button from '@mui/material/Button';

export default function Countdown() {
  const [timer,setTimer]= useState(0);
  const start=useRef(0);
  const time=useRef();


 
  const startTime =()=>{
    time.current=setInterval(()=>{
      start.current++;
      setTimer((prev)=>prev+1)
    },1000)
  }
    
    
  const stopTime = () => {
    clearInterval(time.current);
    
  }
  
  const resetTime = () => {
    stopTime();
    if (timer) {
      start.current++;
      setTimer(0);
    }
  }

  return (
    <div>
      <h1>Stop watch...</h1>
      <p>Timer:{timer}s</p>
      <Button onClick={startTime} color="secondary">Start</Button>
      <Button onClick={stopTime} variant="contained" color="success">
      Stop
      </Button>
      <Button  onClick={resetTime} variant="outlined" color="error">
        Reset
      </Button>
    </div>
  );
}
