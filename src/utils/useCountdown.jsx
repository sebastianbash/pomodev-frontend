import { useState } from "react";

export const useCountdown = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [newTimer, setNewTimer] = useState(25);
  const [newRestart, setNewRestart] = useState(25);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return minutes < 10
      ? `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
      : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const setPomodoro = (time) => {
    setNewTimer(time);
  }

  const toPlaytoPause = () => {
    setIsAnimate(!isAnimate);
  };

  const toReset = (button) => {
    setIsAnimate(false);
  };

  return [
    newTimer,
    setNewTimer,
    isAnimate,
    setIsAnimate,
    newRestart,
    setNewRestart,
    toPlaytoPause,
    setPomodoro,
    children,
  ];
};
