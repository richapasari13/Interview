import React, { useState, useRef } from "react";
import "./styles.css";

const ProgressBar = () => {
  const [progressbar, setProgressBar] = useState([]);
  const divRef = useRef(null);

  const handleClick = () => {
    setProgressBar((prev) => [...prev, prev + 1]);
    setTimeout(() => { 
      console.log('divRef.current', divRef);
      divRef?.current?.classList.add('active')
      divRef.current.style.width = '100%';
    }, 200)
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {progressbar.map((value, key) => (
        <>
          <div className="progress-bar-border" key={key}>
            <div className="progress-bar-inner" ref={ divRef}></div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProgressBar;
