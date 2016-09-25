import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from '../imports/ui/App.jsx';
import Home from '../imports/ui/Home.jsx';
import ListMain from '../imports/ui/ListMain.jsx';
import Map from '../imports/ui/Map.jsx';
 
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/> 
        <Route path="list" component={ListMain}/>
        <Route path="map" component={Map}/> 
      </Route>
    </Router>
  ), document.getElementById('render-target'));
});

