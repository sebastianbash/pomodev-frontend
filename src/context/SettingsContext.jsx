import { useState, createContext } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [lastPomodoro, setLastPomodoro] = useState(pomodoro);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const setCurrentTimer = (active_state) => {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  };

  const playPauseTimer = () => setStartAnimate(!startAnimate);

  const resetTimer = () => setPomodoro(lastPomodoro);


  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return minutes < 10
      ? `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
      : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // clear Session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'short':
        setPomodoro(evaluate.short);
        break;
      case 'long':
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  const stopAnimate = () => {
    setStartAnimate(false);
  };

  const evaluateTheTimer = () => {}


  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        playPauseTimer,
        resetTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAnimate,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;