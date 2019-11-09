export const Types = {
  GET_HOUSES_REQUEST: 'houses/get_houses_request',
  GET_HOUSES_SUCCESS: 'houses/get_houses_success'
};

export const getHousesRequest = term => ({
  type: Types.GET_HOUSES_REQUEST,
  payload: {
    term
  }
});

export const getHousesSuccess = data => ({
  type: Types.GET_HOUSES_SUCCESS,
  payload: {
    houses: data.houses
  }
});
