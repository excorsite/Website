// onChange = event handler used primarly with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes.

import React, { useState } from "react";

function Change() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <br />
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <br />
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter a Delivery Message"
      />
      <p>Comment:{comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">Master Card</option>
        <option value="GiftCard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default Change;
