function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "mango", calories: 60 },
    { id: 5, name: "pineapple", calories: 37 },
    { id: 6, name: "Coconut", calories: 159 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Order
  //  fruits.sort((a, b) => a.calories - b.calories);  // Numerical Order
  // fruits.sort((a, b) => b.calories - a.calories); //  Reverse Numerical Order

  // const calFruits = fruits.filter((fruit) => fruit.calories < 100); // low calories fruit

  const calFruits = fruits.filter((fruit) => fruit.calories >= 100); // high calories fruit

  const listItems1 = calFruits.map((lowcalFruit) => (
    <li key={lowcalFruit.id}>
      {lowcalFruit.name}: &nbsp; <b>{lowcalFruit.calories}</b>
    </li>
  ));

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <p>calories</p>
      <ol>{listItems1}</ol>
    </>
  );
}

export default List;
