import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import setDataReducer from './reducer/setDataReducer';



export const createRootReducer = () => combineReducers({
   form: formReducer,
   setData: setDataReducer

})