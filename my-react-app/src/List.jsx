function List() {
  const fruits = ["apple", "banana", "mango", "pineapple"];

  const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  return <ul>{listItems}</ul>;
}

export default List;
