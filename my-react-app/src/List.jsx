import PropTypes from "prop-types";

function List(props) {
  const categorys = props.category;
  const itemsList = props.items;

  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "banana", calories: 105 },
  //     { id: 3, name: "orange", calories: 45 },
  //     { id: 4, name: "mango", calories: 60 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //     { id: 6, name: "Coconut", calories: 159 },
  //   ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Order
  //  fruits.sort((a, b) => a.calories - b.calories);  // Numerical Order
  // fruits.sort((a, b) => b.calories - a.calories); //  Reverse Numerical Order

  const calFruits = itemsList.filter((fruit) => fruit.calories < 100); // low calories fruit

  // const calFruits = itemsList.filter((fruit) => fruit.calories >= 100); // high calories fruit

  const listItems1 = calFruits.map((lowcalFruit) => (
    <li key={lowcalFruit.id}>
      {lowcalFruit.name}: &nbsp; <b>{lowcalFruit.calories}</b>
    </li>
  ));

  const listItems = itemsList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{categorys}</h3>
      <ol className="list-items">{listItems}</ol>
      <p>
        <h3 className="list-category">Low Calories</h3>
      </p>
      <ol className="list-items">{listItems1}</ol>
    </>
  );
}
List.prototype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
