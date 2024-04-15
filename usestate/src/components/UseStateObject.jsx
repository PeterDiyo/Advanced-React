import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Prince",
    age: "21",
    hobby: "reading",
  });

  const displayPerson = () => {
    setPerson({ name: "Peter", age: "22", hobby: "Programming" });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button
        style={{ color: "white", backgroundColor: "grey" }}
        onClick={displayPerson}
      >
        show peter
      </button>
    </div>
  );
};

export default UseStateObject;
