import React, { useState, useCallback } from "react";
import ChildComponent from "./Child";

const ParentComponent = () => {
        const [num, setNum] = useState(0);
        const [toggle, setToggle] = useState(false);
        // uncomment to see how addByFive is running every time we toggle
        // const addByFive = () => {
        //   console.log("I was running!");
        //   return num + 5;
        // };

        const addByFive = useCallback(() => {
          console.log("I was running!");
          return num + 5;
        }, [num]);

        return (
          <>
            Count: {num}
            <br />
            <button
              onClick={() => {
                setNum(num + 5);
              }}
            >
              Update Number
            </button>
            <br />
            <br />
            <br />
            Toggle value: {JSON.stringify(toggle)}
            <br />
            <button
              onClick={() => {
                setToggle(toggle => !toggle);
              }}
            >
              Toggle the light
            </button>
            <br />
            <br />
            <br />
            <ChildComponent someFunc={addByFive} />
          </>
        );
      };;

export default ParentComponent;
