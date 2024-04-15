import { useState, useEffect } from "react";

const MulltipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);

  return (
    <>
      <div>
        <h1>first count: {value}</h1>
        <button type="button" onClick={() => setValue(value + 1)}>
          first value
        </button>
      </div>
      <div>
        <h1>second count: {secondValue}</h1>
        <button type="buttton" onClick={() => setSecondValue(secondValue + 1)}>
          second value
        </button>
      </div>
    </>
  );
};

export default MulltipleEffects;
