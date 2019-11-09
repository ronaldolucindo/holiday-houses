import { Types } from '../actions/search';

const initialState = {
  searchTerm: ''
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_HOUSES:
      return {
        searchTerm: action.payload.searchTerm
      };

    default:
      return state;
  }
}

export default searchReducer;
