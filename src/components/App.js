import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';
import photos from '../photo_data.js';

import trainPic from '../photos/7train_40th_st.jpg';

class App extends Component {

  headerPhoto() {
    const selectedPhoto = photos.filter(photo => photo.name === 'Sunnyside 7 Train at Sunset')
    const url = `${selectedPhoto[0].path}`
    return url
  }

  render() {
    return (
      <div id="component-App">
        <header className="App-header">
          <p>
          This is Austin's photo site!
          </p>
        </header>
        {/* <img src={trainPic} alt="7 Train in Queens"/> */}
        <img src={this.headerPhoto()} alt="7 Train in Queens"/>
        <ContentContainer />
      </div>
    );
  }
}

export default App;

// when returning url string (doesn't work): <img src="../photos/7train_40th_st.jpg" alt="7 Train in Queens">
// when using imported url: <img src="/static/media/7train_40th_st.ecf143e6.jpg" alt="7 Train in Queens">
