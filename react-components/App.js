import React from 'react';
import {render} from 'react-dom';
import ReactRouter from 'react-router';

class App extends React.Component {
  render() {
    return (
      <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}></ReactRouter.Route>
      </ReactRouter.Router>
    );
  }
}

render(
  <App/>, document.getElementById('app'));