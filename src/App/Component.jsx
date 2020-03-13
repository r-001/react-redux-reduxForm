import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './Home';
var hist = createBrowserHistory();
class App extends React.Component {
  render() {

    return (
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>

    )


  }
}
export default App;


