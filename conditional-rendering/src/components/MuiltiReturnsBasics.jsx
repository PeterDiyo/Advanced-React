import { useState, useEffect } from "react";

const MuiltiReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <div>Muiltiple Returns Basics</div>;
};

export default MuiltiReturnsBasics;
