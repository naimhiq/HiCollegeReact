import React, { useState, useCallback } from "react";
import ParentComponent from "./ParentChildUseCallback/Parent";
// we save unique function values here
const functionsSet = new Set();
const functionsSetWithCallback = new Set();

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [countWithCallback, setCountWithCallback] = useState(0);
  const [numberWithCallback, setNumberWithCallback] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementByTwo = () => {
    setNumber(number + 2);
  };

  const incrementCounterCached = useCallback(() => {
    setCountWithCallback(countWithCallback + 1);
  }, [countWithCallback]);

  const decrementCounterCached = useCallback(() => {
    setCountWithCallback(countWithCallback - 1);
  }, [countWithCallback]);

  const incrementByTwoCached = useCallback(() => {
    setNumberWithCallback(numberWithCallback + 2);
  }, [numberWithCallback]);

  functionsSet.add(incrementCounter); // this functions are re-recreated since the component is re-rendered
  functionsSet.add(decrementCounter); // this functions are re-recreated since the component is re-rendered
  functionsSet.add(incrementByTwo); // this functions are re-recreated since the component is re-rendered

  console.log("Functions set:", functionsSet);
  console.log("Function re-renders", functionsSet.size + " times");

  console.log("**** Functions with callback now will be cached *******");

  functionsSetWithCallback.add(incrementCounterCached);
  functionsSetWithCallback.add(decrementCounterCached);
  functionsSetWithCallback.add(incrementByTwoCached); // clicking on this button only the number dependency for numberWithCallback is updated and not other dependency
  console.log(
    "Functions set with callback are cached",
    functionsSetWithCallback
  );
  console.log(
    "Function re-renders with callback only ",
    functionsSetWithCallback.size + " times"
  );
  // demo- to demostrate click the button Increment by 2 - cached to see how the set is increment only by one since numberWithCallback dependacy is updated
  return (
    <>
      <h1>UseCallback hook</h1>
      <hr />
      <ParentComponent />
      <hr />
      <br />
      <h2>More examples with callback functions</h2>
      Count: {count}
      <br />
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementByTwo}>Increment by 2</button>
      <br />
      <hr />
      <h2>I have cached the functions with useCallback</h2>
      Count: {countWithCallback}
      <br />
      <button onClick={incrementCounterCached}>
        Increase counter with -cached
      </button>
      <button onClick={decrementCounterCached}>
        Decrease Counter - cached
      </button>
      <br />
      <br />
      Count by 2: {numberWithCallback}
      <br />
      <button onClick={incrementByTwoCached}>Increment by 2 - cached</button>
    </>
  );
};
export default UseCallbackComponent;
