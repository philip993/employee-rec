import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import { Typography, InputLabel, InputBase } from '@material-ui/core';

const SearchView = ({ employees, shiftCode, employeeId }) => {
  const classes = Style();

  return (
    <div className={classes.searchOutput}>
      <Typography variant="h6">RESULT</Typography>
      <InputLabel className={classes.searchOutputLabel}>Employee</InputLabel>
      <Typography variant="h6" id="searchText">
        ID: {employeeId}. {employees[0].firstName} {employees[0].secondName}
      </Typography>
      <Typography variant="h6" id="searchShift">
        {shiftCode} shift
      </Typography>
    </div>
  );
};

export default SearchView;
