import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHousesRequest } from 'actions/houses';
import { searchHouses } from 'actions/search';
import Header from 'components/header';

function HouseList(props) {
  const {
    data,
    searchTerm,
    getHousesRequest,
    searchHouses,
    history,
    match
  } = props;

  useEffect(() => {
    getHousesRequest(match.params.term);
    searchHouses(match.params.term);
  }, [match.params.term]);

  const handleSearchInputChange = e => {
    searchHouses(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    const searchParam = encodeURI(searchTerm);
    history.push(`/search/${searchParam}`);
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onInputChange={handleSearchInputChange}
        onSubmit={handleSearchSubmit}
      />
      <p>HouseList</p>
    </>
  );
}

const mapStateToProps = state => ({
  data: state.houses,
  searchTerm: state.search.searchTerm
});

const mapDipatchToProps = {
  getHousesRequest,
  searchHouses
};

HouseList.propType = {
  data: PropTypes.object,
  searchTerm: PropTypes.string,
  getHousesRequest: PropTypes.func,
  searchHouses: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(HouseList);
