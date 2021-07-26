import React, { useContext } from "react";

import { ModalContext } from "../context/modalContext";
import ReactDOM from "react-dom";

const Modal = ({ ...props }) => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal__backdrop" onClick={() => handleModal()} >
      <div className="modal" onClick={(e) => e.stopPropagation()}>{modalContent}
      <button onClick={() => handleModal()}>Close</button>
      </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;