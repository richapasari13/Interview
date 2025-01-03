import { useCallback, useState } from "react";

//["a", "b", "c", "d"]
const useToggle = (arr, currentIndex) => {
    const [currIndex, setCurrentIndex] = useState(currentIndex);

    const toggleValue = useCallback(() => {

        if (currIndex === arr.length - 1) {
            setCurrentIndex(0);
        }

        if (!!arr.length && currIndex < arr.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }

    }, [arr, currIndex])


    return [arr[currIndex], toggleValue];
};

export default useToggle;
