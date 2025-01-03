import "./styles.css";

const ModalComponent = ({
  title = "Title",
  children = "content",
  onClose,
  visible = true,
}) => {
  return (
    <>
      {visible && (
        <>
          <div className="modal-overlay" onClick={onClose}></div>
          <div className="main-wrapper">
            {/* imortant to note- to close modal on overlay, put onClose on main 
            wrapper of of the page and on modal wrapper do event.stopPropagation() */}
            <div className="modal-wrapper">
              <div className="modal-header">
                <div className="title">{title}</div>
                <div onClick={onClose} className="close-modal">
                  X
                </div>
              </div>

              <div className="modal-content">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalComponent;
