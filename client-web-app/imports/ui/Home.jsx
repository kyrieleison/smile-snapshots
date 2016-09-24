import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// import ListImages from './ListImages';

/* const AppBarSample = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarSample; */



// Task component - represents a single todo item
export default class Home extends Component {
  
  constructor(props) {
    super(props);
/*    this.state = {open: false};
    this.handleToggle = () => this.setState({open: !this.state.open});
    this.handleClose = (event) => {
      // console.log(event);
      this.setState({open: false});
    }
    this.handleValue = (event,value) =>{
      console.log(value);
      if (value === "aaa") browserHistory.push('about'); 
      if (value === "bbb") browserHistory.push('users');
    } */
  }


  render() {
    return (
      <div>
        <h1>Sample App</h1>
       {/* <ListImages images={null} /> */}
      </div>
    );
  }
} 
 
/* Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
}; */


