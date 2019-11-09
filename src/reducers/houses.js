import { Types } from '../actions/houses';

const initialState = {
  houses: {}
};

function housesReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_HOUSES_SUCCESS:
      return { 
        houses: action.payload.houses
      };

    default:
      return state;
  }
}

export default housesReducer;
