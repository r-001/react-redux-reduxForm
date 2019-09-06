import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store from './configureStore';
import history from './common/history';
import Login from './component/login'
import Header from './common/components/Header';

const App = () => {
  return <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </>
    </ConnectedRouter>

  </Provider>
}

export default App;


