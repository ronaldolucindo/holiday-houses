import { combineReducers } from 'redux';
import HousesReducer from './houses';
import SearchReducer from './search';

export default combineReducers({
  houses: HousesReducer,
  search: SearchReducer
});
