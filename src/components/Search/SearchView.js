import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import { Typography, InputLabel } from '@material-ui/core';

const SearchView = ({ firstName, secondName }) => {
  const classes = Style();

  return (
    <div className={classes.searchOutput}>
      <Typography variant="h6">RESULT</Typography>
      <InputLabel className={classes.searchLabel}>Employee</InputLabel>
      <Typography variant="h6" className={classes.searchText}>
        {firstName} {secondName}
      </Typography>
    </div>
  );
};

export default SearchView;
