import React from 'react';

const Photo = (props) => {

  // console.log("Photo props are: ", props);

  function imgThumb() {

    const thumbPath = props.photo.path.slice(0,-4) + '-thumb.jpg'

    return (
      <img src={thumbPath} alt={props.photo.caption} />
    )
  }

  return (

  <div className='gallery-div' onClick={() => props.handleThumbClick(props.photo.path)}>
    {imgThumb()}
  </div>

  )
}

export default Photo;
