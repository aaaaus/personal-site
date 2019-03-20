import React from 'react';

const Photo = (props) => {

  console.log("Photo props are: ", props);

    return (

      <div className='gallery-div'>
        <img src="/images/img0013-thumb.jpg" alt={props.photo.caption} />
      </div>

    )
}

export default Photo;
