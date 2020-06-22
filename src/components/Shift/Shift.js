import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import { requestGetShifts } from './ShiftActions';
// Material Ui
import { Typography } from '@material-ui/core';

const Shift = () => {
  const { shiftSchedule } = useSelector((state) => state.ShiftReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div>
      <Typography variant="h4">Shift Schedule</Typography>
      {shiftSchedule
        .sort((a, b) =>
          a.shiftCode > b.shiftCode ? 1 : b.shiftCode > a.shiftCode ? -1 : 0
        )
        .map(({ id, employeeId, shiftCode }) => (
          <div key={id}>
            <h4>{employeeId}</h4>
            <h4>{shiftCode}</h4>
          </div>
        ))}
    </div>
  );
};

export default Shift;
