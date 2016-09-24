import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="home">
        it's home.
        <Link to="/camera">goto camera</Link>
      </div>
    );
  }
}

Home.propTypes = {
};

export default createContainer(() => {
  return {
  };
}, Home);
