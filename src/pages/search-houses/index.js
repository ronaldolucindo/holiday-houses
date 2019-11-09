import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { searchHouses } from 'actions/search';
import SearchForm from 'components/search-form';

import './styles.css';

function SearchHouses(props) {
  const { searchTerm, searchHouses, history } = props;

  const handleInputChange = e => {
    searchHouses(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchParam = encodeURI(searchTerm);
    history.push(`/search/${searchParam}`);
  };

  return (
    <main className="search-houses-container">
      <Typography variant="h2" component="h1" gutterBottom>
        your next holiday house
      </Typography>
      <SearchForm
        value={searchTerm}
        onChange={handleInputChange}
        onSubmit={handleSearchSubmit}
      />
    </main>
  );
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm
});

const mapDipatchToProps = {
  searchHouses
};

SearchHouses.propType = {
  searchTerm: PropTypes.string,
  searchHouses: PropTypes.func,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(SearchHouses);
