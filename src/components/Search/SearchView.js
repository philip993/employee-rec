import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import { Typography } from '@material-ui/core';

const SearchView = ({ firstName, secondName }) => {
  return (
    <div>
      <Typography variant="h6">Search Output</Typography>
      {firstName} {secondName}
    </div>
  );
};

export default SearchView;
