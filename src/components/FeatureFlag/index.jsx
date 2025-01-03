import React from "react";
import FeatureContextProvider from "./FeatureContext";
import ToggleTheme from "./ToggleTheme";

const FeatureFlag = () => {
  return (
    <FeatureContextProvider>
      <ToggleTheme />
    </FeatureContextProvider>
  );
};

export default FeatureFlag;
