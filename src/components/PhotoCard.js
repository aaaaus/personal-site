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

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10)

    console.log(spans);

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
