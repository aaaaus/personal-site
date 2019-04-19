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

    this.state = { orientation: 'portrait' }

    this.modalRef = React.createRef();
  }

  componentDidUpdate() {
    this.modalRef.current.addEventListener('load', this.togglePortraitLandscape);
  }

  //changes state:orientation based on dimensions of image
  togglePortraitLandscape = () => {
    console.log(this.modalRef.current.clientHeight, this.modalRef.current.clientWidth);

    const height = this.modalRef.current.clientHeight;
    const width = this.modalRef.current.clientWidth;

    if (width > height) {
      this.setState({ orientation: 'landscape' })
    } else {
      this.setState({ orientation: 'portrait' })
    }
  }

  //toggles className which in turn will/will not display modal
  showHideClassName = () => {
    const { show } = this.props
    return show ? "modal fade-in display-block" : "modal display-none";
  }

  //returns src string for image if activePic is selected (non-zero array)
  activePicPathString = () => {
    const pic = this.props.activePic
    return (pic.length > 0) ? pic[0].path : ''
  }

  //prevents hideModal propogation when clicking on image itself
  preventHide(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { activePic, hideModal, children } = this.props
    return (
      <div className={this.showHideClassName()} onClick={hideModal}>
        <div className="modal-main" >
          <img src={this.activePicPathString()} alt="" className={`modal-pic ${this.state.orientation}`} ref={this.modalRef} onClick={this.preventHide} />
          <br />
          <button onClick={hideModal}>close</button>
        </div>
      </div>
    )
  }

}

export default Modal;
