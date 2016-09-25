import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

/* const AppBarSample = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarSample; */

// Task component - represents a single todo item
export default class AppBarSample extends Component {
  
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = () => this.setState({open: !this.state.open});
    this.handleClose = (event) => {
      // console.log(event);
      this.setState({open: false});
    }
    this.handleValue = (event,value) =>{
      console.log(value);
      browserHistory.push(value); 
    }
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="Smile SnapShots"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => {
            this.setState({open})
            console.log(open);
          }}
        >
        <Menu onChange={this.handleValue}>
          <MenuItem onTouchTap={this.handleClose} value="list" >スマイル</MenuItem>
          <MenuItem onTouchTap={this.handleClose} value="map"　> 撮った場所</MenuItem>
          <MenuItem onTouchTap={this.handleClose} value="/"　>タイトル</MenuItem>
        </Menu>
        </Drawer>
      </div>
    );
  }
} 
 
/* Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
}; */


