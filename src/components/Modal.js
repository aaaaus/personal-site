import React from 'react';

import './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { orientation: 'portrait' }

    this.modalRef = React.createRef();
  }

  componentDidUpdate() {
    this.modalRef.current.addEventListener('load', this.togglePortraitLandscape);
  }

  //changes state:orientation based on dimensions of image with relation to dimensions of viewport
  togglePortraitLandscape = () => {
    const { clientWidth, clientHeight } = this.modalRef.current
    const photoRatio = clientWidth / clientHeight
    const windowRatio = window.innerWidth / window.innerHeight

    photoRatio > windowRatio ? this.setState({ orientation: 'landscape' }) : this.setState({ orientation: 'portrait' })
  }

  //toggles className which in turn will/will not display modal
  showHideClassName = () => {
    const { show } = this.props
    return show ? "modal fade-in display-block" : "modal display-none";
  }

  //returns src string for image if activePic is selected (non-zero array)
  activePicKeys = (key) => {
    const pic = this.props.activePic
    return (pic.length > 0) ? pic[0][`${key}`] : ''
  }

  //prevents hideModal propogation when clicking on image itself
  preventHide(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { hideModal } = this.props
    return (
      <div className={this.showHideClassName()} onClick={hideModal}>
        <div className="modal-main" >
          <img
            src={this.activePicKeys('path')}
            alt={this.activePicKeys('caption')}
            className={`modal-pic ${this.state.orientation}`}
            ref={this.modalRef}
            onClick={this.preventHide}
            />
          <br />
          <button onClick={hideModal}>close</button>
        </div>
      </div>
    )
  }

}

export default Modal;
