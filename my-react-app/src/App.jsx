import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Button from "./button/button";
import Student from "./Student";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Student name="Spongebob" age={25} isStudent={true} />
      <Student name="Pradip" age={32} isStudent={false} />
      <Student name="Squidward" age={41} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Button />
      <Footer />
    </>
  );
}

export default App;
