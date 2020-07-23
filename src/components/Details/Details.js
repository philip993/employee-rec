import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Material-Ui
import { Typography } from '@material-ui/core';
import DetailsView from './DetailsView';

const Details = () => {
  const emp = useSelector((state) => state.DetailsReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4" className={classes.pageSubheader}>
        Details
      </Typography>

      {emp.details.map(({ ...otherProps }, index) => (
        <DetailsView {...otherProps} />
      ))}
    </div>
  );
};

export default Details;
