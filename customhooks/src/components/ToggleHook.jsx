import useToggle from "./useToggle";

const ToggleHook = () => {
  const { show, toggle } = useToggle(true);

  return (
    <center>
      <div>
        <h3>Toggle Custom Hook</h3>
        <button className="btn" onClick={toggle}>
          toggle
        </button>
        {show && <h4>some stuff</h4>}
      </div>
    </center>
  );
};

export default ToggleHook;
