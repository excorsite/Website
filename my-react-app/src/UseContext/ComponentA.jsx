// useContext() = React Hook that allows you to share values between multiple levels
// of components without passing through each level.
import ComponentB from "./ComponentB";
import "./Component.css";
import React, { useState } from "react";

function ComponentA() {
  const [user, setUser] = useState("Suyog");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB user={user} />
    </div>
  );
}

export default ComponentA;
