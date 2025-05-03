function Button1() {
  //   const handleClick = () => console.log("Ouch!");

  const handleClick2 = (name) => console.log(" ${name} stop clicking me");

  return <button onClick={() => handleClick2("Suyog")}>Click Now ❤️</button>;
}
export default Button1;
