import React from 'react';
import '../App.css'

//clicking outside modal will close; this function will prevent closing when clicking inside the modal
function preventHide(e) {
  e.preventDefault();
  e.stopPropagation();
}

const Modal = ({ hideModal, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={hideModal}>
      <div className="modal-main" onClick={preventHide}>
        {children}
        <br />
        <button onClick={hideModal}>close</button>
      </div>
    </div>
  )

}

export default Modal;
