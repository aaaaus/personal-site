import React, { Component } from 'react';
import '../App.css';

import photos from '../photo_data.js';

import ContentContainer from './ContentContainer';
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
        handleClose={this.hideModal}
        >
          <img src={this.activePicPath()} alt="" className="header-image"/>
        </Modal>

        <header className="App-header">
          <h3>Austin Luft</h3>
          <p>New York | Los Angeles | Europe</p>
        </header>

        <ContentContainer
          location="New York"
          helperTextOn={this.state.helperTextOn}
          handleThumbClick={this.handleThumbClick}
          />
        <ContentContainer
          location="Los Angeles"
          helperTextOn={this.state.helperTextOn}
          />
        {/* }{this.largeViewDiv()} */}

        <footer className="App-footer">

        <p>© Austin Luft 2017-2019</p>
        </footer>

      </div>

    );

  } //render

} //class App

export default App;
