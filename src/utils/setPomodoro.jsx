import React, { useState, useContext, useRef } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext);
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work",
  });

  // this only change the values in the newTimer
  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "short":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "long":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  console.log(newTimer);
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            type="number"
            name="short"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            type="number"
            name="long"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
