function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      {/*  boolean does seen in display that is why we used ternary operator. */}
    </div>
  );
}

export default Student;
// props = read only properties that are shared between components.
//       A parents component can send data to a child component.
//       <Component key = value />
