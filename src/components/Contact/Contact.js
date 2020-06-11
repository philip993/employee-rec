import React from 'react';

// Styles
import Styles from '../Style/Style';
// Material-Ui
import { Typography } from '@material-ui/core';

const Contact = () => {
  const classes = Styles();
  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Contact Page</Typography>
      <Typography variant="h6">You can contact us on</Typography>
      <Typography variant="h6">Mobile: +333 70 999 753</Typography>
      <Typography varinat="h6">Email: info@employee.com</Typography>
    </div>
  );
};

export default Contact;
