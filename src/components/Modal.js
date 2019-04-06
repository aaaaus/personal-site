import React from 'react';
import '../App.css'

const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <br />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )

}

export default Modal;
