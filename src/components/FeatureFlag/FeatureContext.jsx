import { createContext, useContext, useState } from "react";

import React from "react";

const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const FeatureContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ dark: true });

  const toggleTheme = () => {
    setTheme((prev) => ({ dark: !prev.dark }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default FeatureContextProvider;
