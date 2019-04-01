import React from 'react';

import Photo from './Photo';

import photos from '../photo_data.js';

class ContentContainer extends React.Component {

  featureRender() {
    const location = this.props.location

  }

  headerPhoto() {
    const selectedPhoto = photos.filter(photo => photo.feature === true && photo.location === this.props.location)
    debugger
    if (selectedPhoto.length > 0) {
      const url = `${selectedPhoto[0].path}`
      return (
        <img src={url} alt="7 Train in Queens" className="header-image"/>
      )
    } else {
      return ''
    }

  } //headerPhoto

  photoRender() {

    const filteredPhotos = photos.filter(photo => photo.location === this.props.location)

    return filteredPhotos.map(photo => <Photo className="gallery-image" photo={photo} key={photo.photoid} />)

  } //testRender

  render() {
    return (

      <div id="component-contentContainer">
        <h2>COMPONENT: CONTENTCONTAINER</h2>
        {this.headerPhoto()}
        {this.photoRender()}
      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
