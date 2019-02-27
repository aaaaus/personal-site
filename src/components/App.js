import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';
import photos from '../photo_data.js';

import trainPic from '../photos/7train_40th_st.jpg';

class App extends Component {

  headerPhoto() {
    const selectedPhoto = photos.filter(photo => photo.name === 'Sunnyside 7 Train at Sunset')
    const url = `..${selectedPhoto[0].path}`
    return require(url)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          This is Austin's photo site!
          </p>
        </header>
        <img src={this.headerPhoto} />

        <ContentContainer />
      </div>
    );
  }
}

export default App;
