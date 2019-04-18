import React from 'react';

class PhotoCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = { spans: 0 }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //see below for explanation of this function
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 19)

    this.setState({ spans })
  }

  // function imgThumb() {
  //
  //   const thumbPath = props.photo.path.slice(0,-4) + '-thumb.jpg'
  //
  //   return (
  //     <img src={thumbPath} alt={props.photo.caption} />
  //   )
  // }

  render() {
    return (
      <div
        className='gallery-div'
        onClick={() => this.props.handleThumbClick(this.props.photo.path)}
        style={{ gridRowEnd: `span ${this.state.spans}`}}
      >
        <img
          ref={this.imageRef}
          src={this.props.photo.path}
          alt={this.props.photo.caption} />
      </div>
    )
  }

}

export default PhotoCard;

//setSpan function: this function calculates how many spans are required for the containing div by first checking the height of the image. The height is divided by the css row height (make sure these values are close to matching - I set the actual css row height 1 pixel more to ensure a gap between adjacent photos above and below (since css gap for top and bottom are set to zero)
