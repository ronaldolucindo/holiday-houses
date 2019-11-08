import React from 'react';
import { connect } from 'react-redux';
import { searchHousesRequest } from 'actions/houses';

function SearchHouses(props) {
  props.searchHousesRequest('florianopolis');
  return <p>SearchHouses</p>;
}

export default connect(
  null,
  {
    searchHousesRequest
  }
)(SearchHouses);
