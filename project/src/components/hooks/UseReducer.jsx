import React, { useReducer } from "react";
const initialState = { counter: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      let negativeValue = state.counter <= 0 ? 0 : state.counter - 1;
      return { counter: negativeValue };
    default:
      throw new Error();
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>UseReducer hook</h1>
      Counter: {state.counter}
      <br />
      <button type="button" onClick={handleIncrement}>
        Increment +
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement -
      </button>
    </div>
  );
};

export default UseReducerHook;
