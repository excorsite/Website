// useContext() = React Hook that allows you to share values between multiple levels
// of components without passing through each level.

// PROVIDER COMPONENT
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <UserContext.Provider value={value}>
//        <child />
//      </UserContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from "react";
//    import {MyContext} from "./ComponentA";
// 2. const value = useContext(MyContext);

import ComponentB from "./ComponentB";
import "./Component.css";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Suyog");

  function handleUser(event) {
    setUser(event.target.value);
  }

  return (
    <div className="box">
      <h1 value={user} onChange={handleUser}>
        ComponentA
      </h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
