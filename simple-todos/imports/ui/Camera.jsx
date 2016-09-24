import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

class Camera extends Component {
  render() {
    return (
      <div className="camera">
        it's camera.
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
