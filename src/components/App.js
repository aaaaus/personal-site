import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';

class App extends Component {

  state = {
    allPics: [],
    activePic: [],
    location: '',
    helperTextOn: false
  }

  helperText() {
    if (this.state.helperTextOn) {
      return <span className="helper">COMPONENT: APP</span>
    }
  }

  handleThumbClick(e) {
    console.log(e);
  }

  largeViewDiv() {
    if (this.state.activePic.length > 0) {
      return <div><h1>BIG PIC HERE</h1></div>
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
