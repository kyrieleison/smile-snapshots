import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Map extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src='img/map.png' />
      </div>
    );
  }
} 
