import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import { Typography } from '@material-ui/core';

const SearchView = ({
  employeeId,
  employees,
  shiftCode,
  startDate,
  endDate,
}) => {
  return (
    <div>
      <Typography variant="h6">Search Output</Typography>
      {employees[0].firstName}
    </div>
  );
};

export default SearchView;
