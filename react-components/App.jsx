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

import MainLayout from './MainLayout.jsx'
import NotFound from './NotFound.jsx'

import LoginPage from './LoginPage.jsx'
import RegistrationPage from './RegistrationPage.jsx'

import WorkoutsPage from './WorkoutsPage.jsx'
import NewWorkoutPage from './NewWorkoutPage.jsx'

import ExercisesPage from './ExercisesPage.jsx'
import NewExercisePage from './NewExercisePage.jsx'

import Calendar from './Calendar/Calendar.jsx'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={HomePage}/>
          <Route path="login" component={LoginPage}/>
          <Route path="register" component={RegistrationPage}/>
          <Route path="workouts">
            <IndexRoute component={WorkoutsPage}/>
            <Route path="new" component={NewWorkoutPage}/>
          </Route>
          <Route path="exercises">
            <IndexRoute component={ExercisesPage}/>
            <Route path="new" component={NewExercisePage}/>
          </Route>
          <Route path="calendar" component={Calendar}/>
        </Route>
      </Router>
    )
  }
}

render(
  <App/>, document.getElementById('app'))