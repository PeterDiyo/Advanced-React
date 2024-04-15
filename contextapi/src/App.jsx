import React from "react";
import Navbar from "./components/Navbar";
import UserContainer from "./components/UserContainer";
import AppContext, { useGlobalContext } from "./GlobalSetup/AppContext";
import UseReducerBasics from "./usereducer/UseReducerBasics";
import LowerState from "./Performance/LowerState";
import LowerStateChallenge from "./lowerstateChallenge/LowerStateChallenge";

function App() {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <div>
      <Navbar />
      <hr />
      <AppContext />
      <UseReducerBasics />
      <hr />
      <LowerState />
      <hr />
      <LowerStateChallenge />
    </div>
  );
}

export default App;
