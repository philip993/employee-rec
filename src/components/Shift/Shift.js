import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import {} from './ShiftActions';
// Material Ui
import { Typography } from '@material-ui/core';

const Shift = () => {
  const {} = useSelector((state) => state.ShiftReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div>
      <Typography variant="h4">Shift Schedule</Typography>
    </div>
  );
};

export default Shift;
