import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace === true) {
      // console.log("before pop", history);
      history.pop();
      // console.log("after pop", history);
      setHistory((prevHistory) => [...prevHistory, newMode]);
      setMode(newMode);
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
      setMode(newMode);
    }

    // console.log("when you add", history);
  }

  function back() {
    if (history.length > 1) {
      // console.log("before you remove", history);
      history.pop();
      // console.log("after you remove", history);
      setMode(history[history.length - 1]);
    }
  }
  return { mode, transition, back };
}
