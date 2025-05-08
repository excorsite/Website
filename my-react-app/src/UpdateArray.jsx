import React, { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddChange() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveChange(index) {
    // underscore means that beigned passed to function is ignore it parameters.

    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveChange(index)}>
            {food}
          </li>
        ))}
        <input type="text" id="foodInput" placeholder="Enter Food Name" />
        <button onClick={handleAddChange}> Add Food</button>
      </ul>
    </div>
  );
}

export default UpdateArray;
