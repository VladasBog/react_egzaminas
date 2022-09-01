import { useEffect } from "react";
import ReactDOM from "react-dom";
import { StyledModalWrapper } from "./Modal.style";

const Modal = ({
  children,
  onClose,

  hasCloseOnOuter,
  closeOnEscape,
}) => {
  // Side effects
  useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") onClose();
      });
    }
  }, [closeOnEscape, onClose]);

  // Custom functions
  const closeOnOuter = (e) => {
    if (hasCloseOnOuter) {
      const target = e.target;

      if (target.dataset.id === "modalWrapper") onClose();
    }
  };

  const modal = (
    <>
      <StyledModalWrapper
        className="modal-wrapper"
        data-id="modalWrapper"
        onClick={(e) => closeOnOuter(e)}
      >
        <div className="modal">
          <div>
            <span onClick={onClose}>X</span>
          </div>
          <div>{children}</div>
        </div>
      </StyledModalWrapper>
    </>
  );

  return ReactDOM.createPortal(modal, document.getElementById("portal"));
};

export default Modal;
