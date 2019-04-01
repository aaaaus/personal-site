import React, { Component } from 'react';
import '../App.css';

import ContentContainer from './ContentContainer';
import photos from '../photo_data.js';

//import trainPic from '../photos/7train_40th_st.jpg';

class App extends Component {

  headerPhoto() {
    const selectedPhoto = photos.filter(photo => photo.photoid === 1)
    const url = `${selectedPhoto[0].path}`
    return url

  } //headerPhoto

  render() {
    return (

      <div id="component-App">
        <span id="component-App-helper">COMPONENT: APP</span>
        <header className="App-header">
          <p>
          Header content
          </p>
        </header>
          {/*

          <img src={trainPic} alt="7 Train in Queens"/>

          */}
          {/*

          <img src={this.headerPhoto()} alt="7 Train in Queens" className="header-image"/>

          */}
        <ContentContainer location="New York" />
        <ContentContainer location="Los Angeles" />
      </div>

    );

  } //render

} //class App

export default App;
