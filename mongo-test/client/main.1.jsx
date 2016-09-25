import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import App from '../imports/ui/App.jsx';
// import Home from '../imports/ui/Home.jsx'

/* const App = () => (
  <MuiThemeProvider>
    <RaisedButton label="Default" />
  </MuiThemeProvider>
); */

Meteor.startup(() => {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();
  // render(<App />, document.getElementById('render-target'));
  render((<div />), document.getElementById('render-target'))
/*  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  ), document.getElementById('render-target')) */
});
