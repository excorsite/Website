function Button1() {
  const handleClick1 = (e) => (e.target.textContent = "Ouch! 🤕");

  //   let count = 0;

  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me ${count} time/s`);
  //     } else {
  //       console.log(`${name} stop clicking me!`);
  //     }
  //   };

  // return <button onClick={() => handleClick1("sathi")}>Click Now ❤️</button>;

  return <button onDoubleClick={(e) => handleClick1(e)}>Click Now ❤️</button>;
}
export default Button1;
