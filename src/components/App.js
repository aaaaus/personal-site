import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          This is Austin's photo site!
          </p>
        </header>
        <ContentContainer />
      </div>
    );
  }
}

export default App;
