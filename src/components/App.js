import React, { Component } from 'react';
import '../App.css';

import photos from '../photo_data.js';

import ContentContainer from './ContentContainer';

class App extends Component {

  state = {
    allPics: photos,
    activePic: [],
    location: '',
    helperTextOn: false
  }

  helperText() {
    if (this.state.helperTextOn) {
      return <span className="helper">COMPONENT: APP</span>
    }
  }

  //function is sent down to Photo component, and when clicked, path attribute of selected photo is sent back; state (activePic) updated
  handleThumbClick = (path) => {
    const selectedPic = this.state.allPics.filter(pic => pic.path === path)
    this.setState({
      activePic: selectedPic
    })
  }

  //div is rendered when there is an active pic selected
  largeViewDiv() {
    if (this.state.activePic.length > 0) {
      const url = `${this.state.activePic[0].path}`
      return (
        <div>
          <img src={url} alt="" className="header-image"/>
        </div>
      )
    }
  }

  render() {
    return (

      <div id="component-App">
        {this.helperText()}
        <header className="App-header">
          <p>
          Austin Luft Photography * New York * Los Angeles * Europe
          </p>
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
        {this.largeViewDiv()}
      </div>

    );

  } //render

} //class App

export default App;
