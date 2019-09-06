import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from './common/history';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(createRootReducer(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk)))