import styles from "./Button.module.css";

function Button() {
  // inline jsx it also prevent from global style conflict
  const design = {
    backgroundColor: " hsl(200, 100%, 50%)",
    color: "antiquewhite",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button style={design}>Download</button>
      <button className={styles.button}>Click me</button>
    </>
  );
}

export default Button;
