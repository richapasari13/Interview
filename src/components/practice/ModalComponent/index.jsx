import { useState } from "react";
import "./styles.css";
import ModalComponent from "./Modal";

const ConsumeModal = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <>
      <button onClick={handleClick}>Click to open Modal</button>
      <ModalComponent title="Title" onClose={handleClose} visible={visible}>
        Are you sure you want to continue?
      </ModalComponent>
    </>
  );
};

export default ConsumeModal;
