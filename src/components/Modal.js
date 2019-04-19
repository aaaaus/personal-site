import React from 'react';

import './Modal.css'

//clicking outside modal will close; this function will prevent closing when clicking inside the modal

// function preventHide(e) {
//   e.preventDefault();
//   e.stopPropagation();
// }

// const Modal = ({ hideModal, show, children }) => {
//
//   const showHideClassName = show ? "modal display-block" : "modal display-none";
//
//   return (
//     <div className={showHideClassName} onClick={hideModal}>
//       <div
//         className="modal-main"
//         onClick={preventHide}
//         style={{}}
//       >
//         {children}
//         <br />
//         <button onClick={hideModal}>close</button>
//       </div>
//     </div>
//   )

class Modal extends React.Component {
  constructor(props) {
    super(props);

  }

  preventHide(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  showHideClassName = () => {
    const { show } = this.props
    return show ? "modal fade-in display-block" : "modal display-none";
  }

  activePicPathString = () => {
    const pic = this.props.activePic
    return (pic.length > 0) ? pic[0].path : ''
  }

  render() {
    const { activePic, hideModal, children } = this.props
    return (
      <div className={this.showHideClassName()} onClick={hideModal}>
        <div className="modal-main" >
          <img src={this.activePicPathString()} alt="" className="modal-pic" onClick={this.preventHide} />
          <br />
          <button onClick={hideModal}>close</button>
        </div>
      </div>
    )
  }

}

export default Modal;
