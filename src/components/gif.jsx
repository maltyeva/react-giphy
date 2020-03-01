import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `http://giphygifs.s3.amazonaws.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className="gif" src={src} alt="" />
    );
  }
}

export default Gif;
