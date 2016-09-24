import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
      if (value === "aaa") browserHistory.push('analysis'); 
      if (value === "bbb") browserHistory.push('users');
    }
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="Sample"
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
          <MenuItem onTouchTap={this.handleClose} value="aaa" >プロジェクト登録</MenuItem>
          <MenuItem onTouchTap={this.handleClose} value="bbb"　> 分析</MenuItem>
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


