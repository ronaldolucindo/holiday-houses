import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

function SearchForm(props) {
  const { value, onChange, onSubmit } = props;

  return (
    <Paper component="form" className="search-form-container">
      <InputBase
        className="search-form-input"
        placeholder="Where do you want to go?"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        inputProps={{ 'aria-label': 'Where do you want to go?' }}
      />
      <IconButton type="submit" color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchForm.propType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchForm;
