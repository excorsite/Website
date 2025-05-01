import List from "./List";

function Render() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "mango", calories: 60 },
    { id: 5, name: "pineapple", calories: 37 },
    { id: 6, name: "Coconut", calories: 159 },
  ];

  const vegetables = [
    { id: 7, name: "potatoes", calories: 110 },
    { id: 8, name: "celery", calories: 15 },
    { id: 9, name: "carrots", calories: 25 },
    { id: 10, name: "broccoli", calories: 50 },
    { id: 11, name: "corn", calories: 63 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}
export default Render;
