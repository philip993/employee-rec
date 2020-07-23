import React from 'react';

// Style
import Style from '../Style/Style';
import './SearchStyle.scss';
// Material Ui
import { Typography, InputLabel, InputBase } from '@material-ui/core';

const SearchView = ({ employees, shiftCode, employeeId }) => {
  const classes = Style();

  return (
    <div className={classes.searchOutput}>
      <Typography variant="h6">RESULT</Typography>
      <InputLabel className={classes.searchOutputLabel} id="searchEmployee">
        Employee
      </InputLabel>
      <span className={classes.searchOutputSpan} id="searchSpan">
        <Typography variant="h6" id="searchText">
          ID: {employeeId}. {employees[0].firstName} {employees[0].secondName}
        </Typography>
        <Typography variant="h6" id="searchShift">
          {shiftCode} shift
        </Typography>
      </span>
    </div>
  );
};

export default SearchView;
