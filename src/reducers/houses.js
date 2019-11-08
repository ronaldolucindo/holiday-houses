import { Types } from '../actions/houses';

const initialState = () => ({
  searchTerm: '',
  houses: {}
});

function housesReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_HOUSES_SUCCESS:
      return { 
        searchTerm: action.payload.term,
        houses: action.payload.houses
      };

    default:
      return state;
  }
}

export default housesReducer;
