import React from "react";
import UseEffectBasics from "./components/UseEffectBasics";
import MulltipleEffects from "./components/MulltipleEffects";
import FetchData from "./components/FetchData";
import CleanupFunc from "./components/CleanupFunc";

function App() {
  return (
    <div>
      <UseEffectBasics />
      <hr />
      <MulltipleEffects />
      <hr />
      <FetchData />
      <hr />
      <CleanupFunc />
    </div>
  );
}

export default App;
