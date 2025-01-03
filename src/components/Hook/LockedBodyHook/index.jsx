import React, { useRef } from 'react';
import useLockedBody from './useLockedBody';

import './styles.css';

function LockedBodyHook() {
  const parentRef = useRef(null);
  const [isLocked, toggleLock] = useLockedBody({ parentRef });

  return (
    <div ref={parentRef} className='main-wrapper'>
      <button onClick={toggleLock}>
        {isLocked ? 'Unlock Body Scroll' : 'Lock Body Scroll'}
      </button>
      <p>Long content that will make the div overflow... add more text here... Long content that will make the div overflow... add more text here...Long content that will make the div overflow... add more text here...Long content that will make the div overflow... add more text here...</p>
    </div>
  );
}

export default LockedBodyHook;