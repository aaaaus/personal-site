import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';

class App extends Component {

  state = {
    location: '',
    helperTextOn: false
  }

  helperText() {
    if (this.state.helperTextOn) {
      return <span className="helper">COMPONENT: APP</span>
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
          />
        <ContentContainer
          location="Los Angeles"
          helperTextOn={this.state.helperTextOn}
          />
      </div>

    );

  } //render

} //class App

export default App;
