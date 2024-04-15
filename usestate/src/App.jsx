import UseStateArray from "./components/UseStateArray";
import UseStateBasics from "./components/UseStateBasics";
import UseStateObject from "./components/UseStateObject";
import ErrorExample from "./components/error-example";

function App() {
  return (
    <div>
      <ErrorExample />
      <hr />
      <UseStateBasics />
      <hr />
      <UseStateArray />
      <hr />
      <UseStateObject />
    </div>
  );
}

export default App;
