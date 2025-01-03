import React, { useRef } from "react";

const useThrottle = (fn, delay, option) => {
  const { leading, trailing } = option;
  const timerId = useRef(null);
  const lastRan = useRef(0);

  const throttled = (...args) => {
    const now = Date.now();

    if (leading && now - lastRan.current >= delay) {
      fn.apply(this, args);

      lastRan.current = Date.now();
    }

    if (trailing) {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        if (!leading || now - lastRan.current >= delay) {
          fn.apply(this, args);
          lastRan.current = Date.now();
        }
      }, delay);
    }
  };

  return throttled;
};

export default useThrottle;
