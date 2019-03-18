import React from 'react';

import Photo from './Photo';

import photos from '../photo_data.js';

class ContentContainer extends React.Component {

  photoRender() {

    return photos.map(photo => <Photo className="gallery-image" photo={photo} key={photo.photoid} />)

  } //testRender

  render() {
    return (

      <div id="component-contentContainer">
        <h2>COMPONENT: CONTENTCONTAINER</h2>
        {this.photoRender()}
      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
