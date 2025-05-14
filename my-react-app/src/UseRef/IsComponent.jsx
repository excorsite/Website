// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not causes Re-renders when its value changes.
// when you want a component to "remember" some information, but
// you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements.
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useEffect, useRef } from "react";

function IsComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERING");
  });

  function handleClick1() {
    inputRef1.current.focus();

    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();

    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "blue";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();

    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default IsComponent;
