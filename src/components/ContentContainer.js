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

  //renders blank divs for gallery to fill out last row if less than 4 images
  blankDivRender() {

    const filteredPhotos = photos.filter(photo => photo.location === this.props.location && photo.feature === false)

    const remainder = filteredPhotos.length % 4

    if (remainder) {

      const blankDiv = <div className='gallery-div'></div>

      if (remainder === 1) {
        return <>{blankDiv}</>
      } else if (remainder === 2) {
        return <>{blankDiv}{blankDiv}</>
      } else {
        return <>{blankDiv}{blankDiv}{blankDiv}</>
      }
    }
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
          {this.blankDivRender()}
        </div>

      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
