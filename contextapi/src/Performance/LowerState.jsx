import { useState } from "react";
import { data } from "../data";
import Counter from "./Counter";
import List from "./List";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <center>
      <div>
        <Counter />
        <List people={people} />
      </div>
    </center>
  );
};

export default LowerState;
