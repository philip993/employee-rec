import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux actions
import {} from './UpdateContractActionTypes';
// Material Ui
import { Typography } from '@material-ui/core';

const UpdateContract = () => {
  const {} = useSelector((state) => state.UpdateContractReducer);
  const dispatch = useDispatch();
  const classes = Style();

  return (
    <div>
      <Typography variant="h4">Update Contract</Typography>
    </div>
  );
};

export default UpdateContract;
