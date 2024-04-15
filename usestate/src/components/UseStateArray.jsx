import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        style={{ marginTop: "2rem", color: "#fff", backgroundColor: "purple" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};
export default UseStateArray;
