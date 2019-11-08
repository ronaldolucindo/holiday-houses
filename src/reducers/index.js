import { combineReducers } from 'redux';
import HousesReducer from './houses';

export default combineReducers({
  houses: HousesReducer
});
