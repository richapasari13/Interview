import { useRef } from "react";
import useOnScreen from "./useOnScreen";

const Element = ({ number }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="box">
      {number}
      {isVisible ? `I am on screen` : `I am invisible`}
    </div>
  );
};

const OnScreenHook = () => {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(<Element key={i} number={i} />);
  }

  return arr;
};

export default OnScreenHook;
