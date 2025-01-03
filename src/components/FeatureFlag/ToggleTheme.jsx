import React from "react";
import { useThemeContext } from "./FeatureContext";
import "./styles.css";

const ToggleTheme = () => {
  const themeContext = useThemeContext();

  return (
    <div>
      <button onClick={themeContext.toggleTheme}>Toggle theme</button>
      <div
        className={`${themeContext.theme.dark ? "dark-theme" : "light-theme"}`}
      >
        My theme is {themeContext.theme.dark ? "Dark" : "Light"}
      </div>
    </div>
  );
};

export default ToggleTheme;
