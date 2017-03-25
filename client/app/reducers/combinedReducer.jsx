import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import UserReducer from './userReducer';

const CombinedReducer = combineReducers({
  user: UserReducer,
  routing: routerReducer,
});

export default CombinedReducer;
