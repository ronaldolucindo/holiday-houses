import { Types } from '../actions/houses';

const initialState = {
  houses: {},
  index: 0,
  fetching: false,
  fetched: false,
  error: false
};

function housesReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_HOUSES_LOADING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case Types.GET_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.payload.houses,
        index: action.payload.index,
        fetched: true,
        fetching: false
      };
    case Types.GET_HOUSES_ERROR:
      return {
        ...state,
        error: true,
        fetching: false
      };

    default:
      return state;
  }
}

export default housesReducer;
