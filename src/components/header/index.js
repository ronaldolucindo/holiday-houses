import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

function Header(props) {
  const { searchTerm, onInputChange, onSubmit } = props;

  return (
    <header className="header-container">
      <AppBar position="static">
        <Toolbar>
          <Link className="header-title" to="/">
            <Typography variant="h6" noWrap>
              Holyday Houses
            </Typography>
          </Link>
          <div className="search-container">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <form onSubmit={onSubmit}>
              <InputBase
                placeholder="Search…"
                value={searchTerm}
                onChange={onInputChange}
                classes={{
                  root: 'input-root',
                  input: 'input-input'
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propType = {
  searchTerm: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Header;
