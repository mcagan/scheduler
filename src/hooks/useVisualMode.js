import React, { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace === true) {
      history.pop();
      setHistory((prevHistory) => {
        prevHistory.pop();
        return [...prevHistory, newMode];
      });
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
    }
    setMode(newMode);
    console.log(history, newMode, replace);
  }

  function back() {
    if (history.length > 1) {
      console.log("before you remove", history);
      history.pop();
      setMode(history[history.length - 1]);
    } else {
      return;
    }
  }
  return { mode, transition, back };
}
