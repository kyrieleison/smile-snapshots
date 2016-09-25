import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarSample from './AppBarSample.jsx';
import ListImages from './ListImages';

// App component - represents the whole app
export default class App extends Component { 
 
  render() {
    return (
      <MuiThemeProvider>
          <div>
            <AppBarSample />
            <div className="container">
              {this.props.children}
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
} 
