import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Styles from '../Style/Style';
import './SearchStyle.scss';
// Redux Actions
import {
  inputSearchEmployee,
  requestSearchEmployee,
  clearInputSearchEmployee,
} from './SearchActions';
// Material Ui
import { Typography, InputBase, InputLabel } from '@material-ui/core';

const Search = () => {
  const { searchVal } = useSelector((state) => ({
    ...state.SearchReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSearchEmployee = (e) => {
    dispatch(inputSearchEmployee(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSearchEmployee());
    dispatch(clearInputSearchEmployee());
  };

  return (
    <div className={classes.searchBar}>
      <Typography variant="h6">SEARCH</Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel className={classes.searchLabel}>By ID</InputLabel>
        <InputBase
          id="searchBar"
          value={searchVal}
          onChange={handleSearchEmployee}
          placeholder="search by id"
        />
      </form>
    </div>
  );
};

export default Search;
