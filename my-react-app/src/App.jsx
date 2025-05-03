import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Button from "./button/button";
import Student from "./Student";
import App1 from "./App1";
import Render from "./render";
import Button1 from "./Button1";

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
      <Student name="James" age={20} />
      <App1 />
      <Button1 />
      <Render />
      <Button />
      <Footer />
    </>
  );
}

export default App;
