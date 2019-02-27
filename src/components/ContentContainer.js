import React from 'react';

import photos from '../photo_data.js';

class ContentContainer extends React.Component {

  testRender() {
    const names = photos.map(photo => photo.name);
    return <p>{names.join(' / ')}</p>
  }

  render() {
    return (
      this.testRender()
    )
  }
}

export default ContentContainer;
