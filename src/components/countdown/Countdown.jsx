import React, { useRef, useContext, useEffect } from "react";
import { useCountdown } from "../../utils/useCountdown";
import SetPomodoro from "../../utils/setPomodoro";
import { SettingsContext } from "../../context/SettingsContext";
import CountdownAnimation from "./CountdownAnimation";
import {
  Wrapper,
  CountdownContainer,
  TheCountdown,
  CountdownBtn,
  CountdownBtnPlayPause,
  CountdownBtnReset,
} from "./Countdown-styled";

const Countdown = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    playPauseTimer,
    resetTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext);

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate]);

  return (
    <Wrapper>
      <CountdownContainer>
        {pomodoro !== 0 ? 
        <>
          <CountdownAnimation
          timer={pomodoro}
          animate={startAnimate}
        >
          {children}
        </CountdownAnimation> 
        <div>
          <button onClick={resetTimer}>Restart</button>
          <button onClick={playPauseTimer}>{startAnimate ? 'Pause' : 'Play'}</button>
        </div>
        </>: <SetPomodoro />}        
      </CountdownContainer>
    </Wrapper>
  );
};

export default Countdown;
