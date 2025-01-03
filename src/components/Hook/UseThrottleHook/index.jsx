import useThrottle from "./useThrottle";

const ThrottleExample = () => {
  const print = () => {
    console.log("hello");
  };

  const throttled = useThrottle(print, 2500, {
    leading: false,
    trailing: true,
  });

  return <button onClick={throttled}> click me</button>;
};

export default ThrottleExample;
