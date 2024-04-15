import { useState } from "react";

const useToggle = (defaultvalue) => {
  const [show, setShow] = useState(defaultvalue);

  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default useToggle;
