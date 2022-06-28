import { useState, useEffect } from "react";

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00'
}

export const Timer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  function updateRemainingTime(countdownTimestampMs) {
    
  }

  return (
    <div>
        <span>{remainingTime.minutes}</span>
        <span>:</span>
        <span>{remainingTime.seconds}</span>
        {/* <button onClick={() => setIsActive(!isActive)}>{isActive ? "Pause" : "Start"}</button> */}
    </div>
  );
  
};