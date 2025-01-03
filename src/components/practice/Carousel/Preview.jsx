import React, { useState } from "react";
import "./styles.css";

const Preview = ({ imageUrl, activeImageIdx, images, onNavigate }) => {
  return (
    <div className="preview">
      <button
        className="navigation-button"
        onClick={() => onNavigate(activeImageIdx - 1)}
        disabled={activeImageIdx === 0}
      >
        {"<"}
      </button>
      <img src={imageUrl} alt={"Images"} height={"100%"} width={"100%"} />
      <button
        className="navigation-button"
        onClick={() => onNavigate(activeImageIdx + 1)}
        disabled={activeImageIdx === images.length - 1}
      >
        {">"}
      </button>
    </div>
  );
};

export default Preview;
