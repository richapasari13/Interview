import React, { useState } from "react";
import Preview from "./Preview";
import Slider from "./Slider";

const images = [
  "https://via.placeholder.com/150",
  "https://picsum.photos/700/800",
  "https://picsum.photos/100/200",
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/400",
  "https://picsum.photos/500/600",
];

const Carousel = (props) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  const handleImageClick = (image) => {
    setImageUrl(image);
  };

  const handleNavigate = (currImgIdx) => {
    setImageUrl(images[currImgIdx]);
  };

  const activeImageIdx = images.indexOf(imageUrl);

  return (
    <div className="carousel-wrapper">
      <Preview
        imageUrl={imageUrl}
        images={images}
        activeImageIdx={activeImageIdx}
        onNavigate={handleNavigate}
      />
      <Slider
        images={images}
        onImageClick={handleImageClick}
        activeImageIdx={activeImageIdx}
      />
    </div>
  );
};

export default Carousel;
