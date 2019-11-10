export const Types = {
  GET_HOUSES_REQUEST: 'houses/get_houses_request',
  GET_HOUSES_LOADING: 'houses/get_houses_loading',
  GET_HOUSES_SUCCESS: 'houses/get_houses_success',
  GET_HOUSES_ERROR: 'houses/get_houses_error'
};

export const getHousesRequest = term => ({
  type: Types.GET_HOUSES_REQUEST,
  payload: {
    term
  }
});

export const getHousesLoading = () => ({
  type: Types.GET_HOUSES_LOADING
});

export const getHousesSuccess = data => ({
  type: Types.GET_HOUSES_SUCCESS,
  payload: {
    houses: data.houses
  }
});

export const getHousesError = () => ({
  type: Types.GET_HOUSES_ERROR
});
