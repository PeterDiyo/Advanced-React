import React from "react";
import ControlledInputs from "./components/ControlledInputs";
import UserChallenge from "./components/UserChallenge";
import MultipleInputs from "./components/MultipleInputs";
import OtherInputs from "./components/OtherInputs";
import FormData from "./components/FormData";
import UseRefBasics from "./components/useRef/UseRefBasics";

function App() {
  return (
    <div>
      <ControlledInputs />
      <hr />
      <UserChallenge />
      <hr />
      <MultipleInputs />
      <hr />
      <OtherInputs />
      <hr />
      <FormData />
      <hr />
      <UseRefBasics />
    </div>
  );
}

export default App;
