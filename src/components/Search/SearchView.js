import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import { Typography, InputLabel, InputBase } from '@material-ui/core';

const SearchView = ({ firstName, secondName }) => {
  const classes = Style();

  return (
    <div className={classes.searchOutput}>
      <Typography variant="h6">RESULT</Typography>
      <InputLabel className={classes.searchOutputLabel}>Employee</InputLabel>
      <Typography variant="h6" id="searchText">
        {firstName} {secondName}
      </Typography>
    </div>
  );
};

export default SearchView;
