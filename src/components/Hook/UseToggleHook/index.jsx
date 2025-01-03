import useToggle from "./useToggle";

function ToggleHook() {
  const [currentValue, toggleValue] = useToggle(["a", "b", "c", "d"], 2);

  return (
    <button onClick={toggleValue}> "currentValue" : {currentValue}</button>
  );
}

export default ToggleHook;
