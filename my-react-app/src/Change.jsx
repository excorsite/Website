// onChange = event handler used primarly with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes.

import React, { useState } from "react";

function Change() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <br />
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <br />
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default Change;
