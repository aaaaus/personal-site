import React, { Component } from 'react';
import '../App.css';

import photos from '../photo_data.js';

import LocationContainer from './LocationContainer';
import Modal from './Modal';

class App extends Component {

  state = {
    allPics: photos,
    activePic: [],
    location: '',
    modalDisplay: false,
    helperTextOn: false
  }

  // showModal = () => {
  //   this.setState({ modalDisplay: true });
  // };

  hideModal = () => {
    this.setState({ modalDisplay: false });
  };

  activePicPath = () => {
    const pic = this.state.activePic
    return (pic.length > 0) ? pic[0].path : ''
  }

  helperText() {
    if (this.state.helperTextOn) {
      return <span className="helper">COMPONENT: APP</span>
    }
  }

  //function is sent down to Photo component, and when clicked, path attribute of selected photo is sent back; state (activePic) updated and modal is displayed
  handleThumbClick = (path) => {
    const selectedPic = this.state.allPics.filter(pic => pic.path === path)
    this.setState({
      activePic: selectedPic,
      modalDisplay: true
    })
  }

  render() {
    return (

      <div id="component-App">
        {this.helperText()}

        <Modal
        show={this.state.modalDisplay}
        hideModal={this.hideModal}
        activePic={this.state.activePic}
        >
          {/* <img src={this.activePicPath()} alt="" className="modal-pic"/> */}
        </Modal>

        <header className="app-header">
          <h3>Austin Luft</h3>
          <p>
            <a href="#new-york">New York</a> | <a href="#los-angeles">Los Angeles</a> | <a href="#europe">Europe</a>
          </p>
        </header>

        <LocationContainer
          location="New York"
          helperTextOn={this.state.helperTextOn}
          handleThumbClick={this.handleThumbClick}
          />

        <LocationContainer
          location="Los Angeles"
          helperTextOn={this.state.helperTextOn}
          />

        <footer className="app-footer">
          <p>© Austin Luft 2017-2019</p>
        </footer>

      </div>

    );

  } //render

} //class App

export default App;
