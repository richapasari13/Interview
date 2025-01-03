import React, { useEffect, useState } from "react";

const useHasFocus = () => {
    const [focusView, setFocusView] = useState(document.hasFocus());

    const onFocus = () => {
        setFocusView(true);
    };

    const onBlur = () => {
        setFocusView(false);
    };

    useEffect(() => {
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);

        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
    }, []);

    return focusView;
};

export default useHasFocus;
