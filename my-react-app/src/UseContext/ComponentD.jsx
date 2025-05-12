import "./Component.css";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;

// if you have a lot of nested components passing props down to each level can
//  become very tedious this is a way to avoid that so we used useContext.
