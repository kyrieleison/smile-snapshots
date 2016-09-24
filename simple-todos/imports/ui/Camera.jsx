import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

class Camera extends Component {
  componentDidMount() {
    let localVideo = ReactDOM.findDOMNode(this.refs.local);
    let localStream;

    window.navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
      console.log(stream);
      localStream = stream;
      localVideo.src = window.URL.createObjectURL(localStream);
    })
    .catch((error)  => {
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });
  }
  render() {
    return (
      <div className="camera">
        it's camera.
        <br />
        <video id="local_video" ref="local" autoPlay style={{ width: 320 + 'px', height: 240 + 'px' }} />
      </div>
    );
  }
}

Camera.propTypes = {
};

export default createContainer(() => {
  return {
  };
}, Camera);
