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
        <div className="container">
          <AppBarSample />
          <ListImages />
          {/* <ToolBarMain /> */}
          {/* <TableMain />
          <header>
            <h1>Todo List</h1>
          </header>
          <ul>
            this.renderTasks()
          </ul>
        </div>
        <div className="detail"> */}
           {this.props.children}  
        </div>
      </MuiThemeProvider>
    );
  }
} 
