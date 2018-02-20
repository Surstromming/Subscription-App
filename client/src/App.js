import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './routes/Home';
import Summary from './routes/Summary';
import NoMatch from './routes/NoMatch';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/summary" component={Summary} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
