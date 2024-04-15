import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("Diyo");

  const codeExample = text || "hello world";

  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}
      <h4>Falsy OR : {text || "Hello world"}</h4>
      <h4>Falsy AND : {text && "Hello world"}</h4>
      <h4>Truthy OR : {name || "Hello world"}</h4>
      <h4>Truthy AND : {name && "Hello world"}</h4>
      {codeExample}
    </div>
  );
};

export default ShortCircuitOverview;
