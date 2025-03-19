import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Greeting name={"randomname"} />
      <Button
        onClick={() => {
          console.log("clicked button!");
        }}
        label={"label for the button"}
      />
    </div>
  );
}

export default App;
