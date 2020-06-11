import React from 'react';

// Styles
import Styles from '../Style/Style';
// Material Ui
import { Typography } from '@material-ui/core';

const Homepage = () => {
  const classes = Styles();

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h1">Employee List</Typography>
      <Typography variant="h5">All information about employees.</Typography>
    </div>
  );
};

export default Homepage;
