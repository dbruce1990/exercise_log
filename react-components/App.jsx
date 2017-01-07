import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>homepage</h1>
      </div>
    );
  };
}
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegistrationPage}/>
      </Router>
    );
  }
}

render(
  <App/>, document.getElementById('app'));