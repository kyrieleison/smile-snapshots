import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarSample from './AppBarSample.jsx';
import ListImages from './ListImages';

const imgs = [
      { _id:1, url:'img/images.jpg',msg:'message' },
      { _id:2, url:'img/images.jpg',msg:'message' },
      { _id:3, url:'img/images.jpg',msg:'message' },
      { _id:4, url:'img/images.jpg',msg:'message' },
      { _id:5, url:'img/images.jpg',msg:'message' },
    ];

// App component - represents the whole app
export default class App extends Component { 
 
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBarSample />
          <ListImages images={imgs} />
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
