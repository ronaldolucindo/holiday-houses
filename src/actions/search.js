export const Types = {
  SEARCH_HOUSES: 'search/search_houses'
};

export const searchHouses = searchTerm => ({
  type: Types.SEARCH_HOUSES,
  payload: {
    searchTerm
  }
});
