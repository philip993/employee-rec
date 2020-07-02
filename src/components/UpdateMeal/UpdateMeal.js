import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import {
  requestUpdateMeals,
  inputShiftId,
  shiftArray,
} from './UpdateMealActions';
// Material Ui
import { Typography, InputLabel, InputBase } from '@material-ui/core';

const UpdateMeal = () => {
  const { shiftId } = useSelector((state) => state.UpdateMealReducer);
  const dispatch = useDispatch();
  const classes = Style();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestUpdateMeals());
  };

  const handleShiftId = (e) => {
    dispatch(inputShiftId(e.target.value));
  };

  const handleShiftArray = (e) => {
    dispatch(shiftArray(e.target.value));
  };

  return (
    <div>
      <Typography variant="h4">Update Meals</Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel>Shift ID</InputLabel>
        <InputBase
          type="number"
          value={shiftId}
          onChange={handleShiftId}
          placeholder="Enter Shift ID"
        />
      </form>
    </div>
  );
};

export default UpdateMeal;
