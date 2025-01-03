import { useCallback, useState, useEffect } from "react";

const useLockedBody = ({ parentRef }) => {

    const [isLocked, setIsLocked] = useState(false);

    const toggleLock = useCallback(() => {
        setIsLocked((prev) => !prev);
    }, []);

    useEffect(() => {
        if (!parentRef.current) return;
        const { current } = parentRef;
        // console.log('current.offsetHeight', current.offsetHeight);
        // console.log('current.clientHeight', current.clientHeight);
        const scrollPadding = current.offsetHeight - current.clientHeight;
        // console.log('scrollHeight', scrollHeight);
        if (isLocked) {
            current.style.paddingRight = `${scrollPadding}px`;
            current.style.overflow = 'hidden';
        } else {
            current.style.paddingRight = '0px';
            current.style.overflow = 'auto';
        }

        return () => {
            current.style.paddingRight = '0px';
            current.style.overflow = 'auto';
        };

    }, [isLocked, parentRef]);

    return [isLocked, toggleLock];
}

export default useLockedBody;