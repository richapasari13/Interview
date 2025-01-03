import React from "react";

const Slider = ({ images, onImageClick, activeImageIdx }) => {
  const handleClick = (image) => {
    onImageClick(image);
  };

  console.log("activeImageIdx slider", activeImageIdx);
  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          height={100}
          width={100}
          alt={`ImageItem ${index}`}
          style={{ marginRight: "10px" }}
          onClick={() => handleClick(image)}
          className={`${activeImageIdx === index && "active"} slider-image`}
        />
      ))}
    </div>
  );
};

export default Slider;
