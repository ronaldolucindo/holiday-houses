export const Types = {
  SEARCH_HOUSES_REQUEST: 'houses/seach_houses_request',
  SEARCH_HOUSES_SUCCESS: 'houses/search_houses_success'
};

export const searchHousesRequest = term => ({
  type: Types.SEARCH_HOUSES_REQUEST,
  payload: {
    term
  }
});

export const searchHousesSuccess = data => ({
  type: Types.SEARCH_HOUSES_SUCCESS,
  payload: {
    term: data.term,
    houses: data.houses
  }
});
