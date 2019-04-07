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
      const caption = `${selectedPhoto[0].caption}`
      return (
        <img src={url} alt={caption} className="header-image"/>
      )
    } else {
      return ''
    }

  }

  //function renders all photos of matching location type
  photoRender() {

    const filteredPhotos = photos.filter(photo => photo.location === this.props.location && photo.feature === false)

    const photoArray = filteredPhotos.map(photo => <Photo photo={photo} key={photo.photoid} handleThumbClick={this.props.handleThumbClick} />)

    // return photoArray.push(<div className="gallery-div">GRAPEFRUIT</div>)
    return photoArray

  }

  render() {
    return (

      <div id="component-contentContainer">
        {this.helperText()}<br />

        <div className="feature-image-container">
          {this.featureRender()}
          <span className="location-header">{this.props.location}</span>
        </div>

        <div className="gallery-wrapper">
          {this.photoRender()}
        </div>

      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
