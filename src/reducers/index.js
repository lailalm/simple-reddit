import { combineReducers } from 'redux';
import ListReducer from './ListReducer';
import Routes from './Routes';

export default combineReducers({
  listReducer: ListReducer,
  Routes,
});
