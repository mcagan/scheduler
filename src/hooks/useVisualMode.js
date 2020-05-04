import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace === true) {
      setHistory((prevHistory) => {
        prevHistory.pop();
        return [...prevHistory, newMode];
      });
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
    }
    setMode(newMode);
  }

  function back() {
    if (history.length > 1) {
      let newHistory = history;
      newHistory.pop();
      setMode(newHistory[newHistory.length - 1]);
    }
  }
  return { mode, transition, back };
}
