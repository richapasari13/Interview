import { useState } from "react";
import usePrevious from "./usePrevious";

const UsePreviousExample = () => {
  const [count, setCount] = useState(0);

  // get the previous value passed into the hook on the last render
  const prevCount = usePrevious(count);
  console.log("state");

  // show both current and previous value
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UsePreviousExample;

//Basically useRef and useEffect
