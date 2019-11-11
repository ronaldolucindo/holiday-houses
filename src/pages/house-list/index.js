import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHousesRequest } from 'actions/houses';
import { searchHouses } from 'actions/search';
import Header from 'components/header';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import HouseCardList from './house-card-list';
import Button from '@material-ui/core/Button';

import './styles.css';

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
  }, [match.params.term, getHousesRequest, searchHouses]);

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

  const hasMoreResults =
    !!data.houses.metaData &&
    data.houses.metaData.cursor.totalCount > (data.index + 1) * 10;

  const handleLoadMoreClick = () => {
    getHousesRequest(match.params.term, data.index + 1);
  };

  return (
    <div className="house-list">
      <Header
        searchTerm={searchTerm}
        onInputChange={handleSearchInputChange}
        onSubmit={handleSearchSubmit}
      />
      <main className="main-container">
        {data.fetching && (
          <CircularProgress size={60} className="main-loader" />
        )}
        {data.error && data.fetched && (
          <div className="error-message">
            <ErrorIcon />
            <Typography gutterBottom variant="h6" component="p">
              error loading data
            </Typography>
          </div>
        )}
        {!data.fetching && !data.error && data.fetched && (
          <>
            <section className="house-list-top">
              <Typography className="total-results" variant="h3" component="h1">
                {data.houses.metaData.searchRegion.name}
              </Typography>
              <Typography
                className="total-results"
                variant="subtitle1"
                component="p"
              >
                {data.houses.metaData.cursor.totalCount} accommodations found
              </Typography>
            </section>
            <HouseCardList houses={data.houses.offers} />
            {hasMoreResults && (
              <Button
                variant="contained"
                className="load-more-btn"
                onClick={handleLoadMoreClick}
              >
                load more
              </Button>
            )}
          </>
        )}
      </main>
    </div>
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
