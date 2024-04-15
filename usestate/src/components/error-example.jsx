import React from "react";

const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="error-btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
