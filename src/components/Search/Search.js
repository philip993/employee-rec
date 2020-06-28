import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Styles from '../Style/Style';
// Redux Actions
import {} from './SearchActionTypes';
// Material Ui
import { Typography, InputBase, Button } from '@material-ui/core';
import { inputSearchEmployee, requestSearchEmployee } from './SearchActions';

const Search = () => {
  const { searchVal } = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSearchEmployee = (e) => {
    dispatch(inputSearchEmployee(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSearchEmployee());
  };

  return (
    <div>
      <Typography variant="h6">SEARCH</Typography>
      <form onSubmit={handleSubmit}>
        <InputBase
          value={searchVal}
          onChange={handleSearchEmployee}
          placeholder="search by id"
        />
      </form>
    </div>
  );
};

export default Search;
