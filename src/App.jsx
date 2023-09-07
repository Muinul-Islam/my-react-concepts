import "./App.css";
import "./Counter";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";

function App() {
  function btnClicked() {
    alert("Button Clicked");
  }
  const btnClickedAgain = () => {
    alert("Button Clicked Again");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Concepts</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={btnClicked}>Click Me</button>
      <button onClick={btnClickedAgain}>Click Me Again</button>
      <button
        onClick={() => {
          alert("Don't click again");
        }}
      >
        Button
      </button>
      <button
        onClick={() => {
          addToFive(5);
        }}
      >
        ADD
      </button>
    </>
  );
}

export default App;
