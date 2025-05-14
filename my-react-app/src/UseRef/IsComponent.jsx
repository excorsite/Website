// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not causes Re-renders when its value changes.
// when you want a component to "remember" some information, but
// you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements.
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function IsComponent() {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("COMPONENT RENDERING");
  });

  function handleClick() {
    setNumber((n) => n + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default IsComponent;
