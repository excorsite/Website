// React hook = Special function that allows functional components to use REact features without writing
// class components (React v16.8) (useState, useEffect, useContext, useReducer, useCallback and more ..)

// useState() = A React hook that allows the creation of a stateful variable And
// a setter function to update its value in the Virtual DOM. [name, setName]
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const updateName = () => {
    setName("Suyog");
  };

  const ToggleEventstatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Name</button>

      <p>Is Employed: {isEmployed ? "yes" : "No"}</p>
      <button onClick={ToggleEventstatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
