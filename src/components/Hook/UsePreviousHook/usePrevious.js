import React, { useEffect, useRef } from "react";

const usePrevious = (count) => {
  const prevRef = useRef(null);

  useEffect(() => {
    console.log("ran");
    prevRef.current = count;
  }, [count]);

  return prevRef.current;
};
export default usePrevious;
