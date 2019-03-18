import React from 'react';

import Photo from './Photo';

import photos from '../photo_data.js';

class ContentContainer extends React.Component {

  // testRender() {
  //   const photos = photos.map(photo => {
  //     return <Photo className="gallery-image" photo={photo}>
  //   });
  //
  //   return photos
  //
  // } //testRender

  render() {
    return (

      <div id="component-contentContainer">
        <h2>COMPONENT: CONTENTCONTAINER</h2>
        {photos.map(photo => <Photo className="gallery-image" photo={photo} />)}
      </div>

    )

  } //render

} //class ContentContainer

export default ContentContainer;
