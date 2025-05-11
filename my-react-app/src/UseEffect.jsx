// useEffect = React hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// this component mounys
// the state of a value

// useEffect(function, [dependence])

// 1. useEffect(() => {})  // Runs after every re-render
// 2. useEffect(() => {},[])   // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  function addCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default UseEffect;
