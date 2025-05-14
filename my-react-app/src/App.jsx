import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Button from "./button/button";
import Student from "./Student";
import App1 from "./App1";
import Render from "./render";
import Button1 from "./Button1";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Change from "./Change";
import ColorPicker from "./ColorPicker";
import UpdaterFunction from "./UpdaterFunction";
import UpdateObject from "./UpdateObject";
import UpdateArray from "./UpdateArray";
import CarDesign from "./CarDesign";
import ToDoList from "./ToDoList";
import UseEffect from "./UseEffect";
import Window from "./Window";
import DigitalClock from "./DigitalClock";
import ComponentA from "./UseContext/ComponentA";
import IsComponent from "./UseRef/IsComponent";

function App() {
  return (
    <>
      <DigitalClock />
      <Header />
      <Food />
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
      <MyComponent />
      <Footer />
      <ColorPicker />
      <Counter />
      <Change />
      <UpdaterFunction />
      <UpdateObject />
      <UpdateArray />
      <CarDesign />
      <ToDoList />
      <UseEffect />
      <Window />
      <ComponentA />
      <IsComponent />
    </>
  );
}

export default App;
