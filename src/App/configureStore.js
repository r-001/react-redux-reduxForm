import { createRootReducer } from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(createRootReducer(history),
  composeEnhancer(applyMiddleware(thunk)))
