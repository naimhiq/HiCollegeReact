import React from "react";
import { CounterProvider } from "./useContext/provider/CounterProvider";
import CartUpdates from "./useContext/components/CartUpdates";
import CounterButtonWithContext from "./useContext/components/CounterButtonWithContext";

const UseContext = () => {
  return (
    <>
      <h1>UseContext hook</h1>
      <CounterProvider>
        <CartUpdates />
        <CounterButtonWithContext />
      </CounterProvider>
    </>
  );
};

export default UseContext;
