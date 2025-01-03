import "./styles.css";
import ModalComponent from "../ModalComponent/Modal";
import { useState } from "react";

const images = [
  "https://via.placeholder.com/150",
  "https://picsum.photos/700/800",
  "https://picsum.photos/100/200",
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/400",
  "https://picsum.photos/500/600",
];

const ImageGallery = () => {
  const [imageUrl, setImageUrl] = useState(images[0]);
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleImageClick = (image) => {
    setImageUrl(image);
    setModalVisibility(true);
  };

  const handleClose = () => {
    setModalVisibility(false);
  };

  const handleNavigate = (currIndex) => {
    setImageUrl(images[currIndex]);
  };

  const activeImageIndex = images.indexOf(imageUrl);

  return (
    <>
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Images ${index}`}
            className={`${
              activeImageIndex === index && "active"
            } image-gallery`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <ModalComponent
        title={"Image"}
        visible={isModalVisible}
        onClose={handleClose}
      >
        <button
          onClick={() => handleNavigate(activeImageIndex - 1)}
          disabled={activeImageIndex === 0}
        >
          {"<"}
        </button>
        <img
          src={imageUrl}
          alt={"Images"}
          className="image-content"
          height={200}
          width={500}
        />
        <button
          onClick={() => handleNavigate(activeImageIndex + 1)}
          disabled={activeImageIndex === images.length - 1}
        >
          {">"}
        </button>
      </ModalComponent>
    </>
  );
};

export default ImageGallery;
