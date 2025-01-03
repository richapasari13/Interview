import React, { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
    const [isVisible, setVisibility] = useState(false);


    const observer = new IntersectionObserver(
        ([entry]) => {
            setVisibility(entry.isIntersecting);
        },
        { threshold: 1 }
    ); //using [entry] like this is array destructring

    useEffect(() => {
        observer.observe(ref.current);

        // remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    },[]);

    return isVisible;
};

export default useOnScreen;
