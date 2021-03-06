import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Smile Snapshop</h1>
        </header>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => {
  return {
  };
}, App);
