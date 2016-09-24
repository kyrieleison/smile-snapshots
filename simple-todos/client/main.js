import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
 
import App from '../imports/ui/App.jsx';
import Home from '../imports/ui/Home.jsx';
import Camera from '../imports/ui/Camera.jsx';
 
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="camera" component={Camera}/>
      </Route>
    </Router>
  ), document.getElementById('render-target'))
});
