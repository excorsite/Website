// Updater function = A function passed as an argument to setState() usually ex. setYear(y => y + 1)
// Allow for safe upadtes based on the previous state used with multiple state update
// and asychronouso functions
// Good practice to use updater function.

import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  function increment() {
    //uses the CURRENT state to calculate the NEXT state.
    //set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    //NEXT state becomes the CURRENT state after an update.
    setCount((c) => c + 1);
    setCount((c) => c + 1);

    // Takes the PENDdING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line)
    // During the next react, it will call time in the same order.
  }

  function reset() {
    setCount(0);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
      <button onClick={increment}> Increment</button>
    </>
  );
}

export default UpdaterFunction;
