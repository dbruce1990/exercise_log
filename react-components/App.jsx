import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>homepage</h1>
      </div>
    )
  }
}
import LoginPage from './LoginPage.jsx'
import RegistrationPage from './RegistrationPage.jsx'
import MainLayout from './MainLayout.jsx'
import WorkoutsPage from './WorkoutsPage.jsx'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={HomePage}/>
          <Route path="login" component={LoginPage}/>
          <Route path="register" component={RegistrationPage}/>
          <Route path="workouts" component={WorkoutsPage}/>
        </Route>
      </Router>
    )
  }
}

render(
  <App/>, document.getElementById('app'))