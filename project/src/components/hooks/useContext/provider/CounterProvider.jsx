import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
  // we accept children props
  // we add state for number of clicks
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  // we create global function increment for increment and updating state
  const increment = () => {
    setNumberOfClicks(numberOfClicks + incrementBy);
  };

  return (
    <CounterContext.Provider
      value={[numberOfClicks, increment, incrementBy, setIncrementBy]}
    >
      {children}
    </CounterContext.Provider>
  );
};
