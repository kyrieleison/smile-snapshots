import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

// Task component - represents a single todo item
export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{textAlign: 'center', marginTop : '20px'}} >
        <img src="img/title.png" />
      </div>
    );
  }
} 
 

