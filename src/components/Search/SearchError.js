import React from 'react';
import {} from 'react-redux';

// Style
import Style from '../Style/Style';
// Material Ui
import {} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const SearchError = () => {
  const classes = Style();
  return (
    <div className={classes.searchError}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Invalid ID used in Search!
      </Alert>
    </div>
  );
};

export default SearchError;
