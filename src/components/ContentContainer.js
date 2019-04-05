import React from 'react';

import Photo from './Photo';

import photos from '../photo_data.js';

class ContentContainer extends React.Component {

  //inherits from "App" component's state above, passed down as prop
  state = {
    helperTextOn: this.props.helperTextOn
  }

  //adds helper text for dev if toggled on in state
  helperText() {
    if (this.state.helperTextOn) {
      return <span className="helper">COMPONENT: CONTENTCONTAINER</span>
    }
  }

  //function returns JSX img tag if the photo matches the location and is flagged as featured
  featureRender() {
    const selectedPhoto = photos.filter(photo => photo.feature === true && photo.location === this.props.location)

    if (selectedPhoto.length > 0) {
      const url = `${selectedPhoto[0].path}`
      return (
        <img src={url} alt="7 Train in Queens" className="header-image"/>
      )
    } else {
      return ''
    }

  }

  //function renders all photos of matching location type
  photoRender() {

    const filteredPhotos = photos.filter(photo => photo.location === this.props.location && photo.feature === false)

    return filteredPhotos.map(photo => <Photo className="gallery-image" photo={photo} key={photo.photoid} handleThumbClick={this.props.handleThumbClick} />)

  }

  render() {
    return (

      <div id="component-contentContainer">
        {this.helperText()}<br />

        <div className="feature-image-container">
          {this.featureRender()}
          <span className="location-header">{this.props.location}</span>
        </div>

        {this.photoRender()}

      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
