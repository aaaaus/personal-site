import React from 'react';

const Photo = (props) => {

  console.log("Photo props are: ", props);

    return (

      <div>
        <img src={props.photo.path} alt={props.photo.caption} />
      </div>

    )
}

export default Photo;
