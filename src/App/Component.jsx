import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './common/history';
import Header from './common/components/Header';
import LoginForm from './component/Login';
import './common/assests/css/app.css'

const App = () => {
  const ruchir = value => console.log(value);
  return <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={props => (
              <LoginForm {...props} ruchir={ruchir} />
            )} />
          </Switch>
        </div>
      </>
    </ConnectedRouter>

  </Provider>
}

export default App;


