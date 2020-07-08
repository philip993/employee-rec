import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import { requestGetContracts } from './ContractActions';
// Material Ui
import { Typography } from '@material-ui/core';

const Contract = () => {
  const { contractList } = useSelector((state) => ({
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestGetContracts());
  }, []);

  return (
    <div>
      <Typography variant="h4">Contract</Typography>
      {contractList.map((contract, index) => (
        <div key={contract.id}>
          <h5>{contract.contractId}</h5>
          <h5>
            {contract.employees[0].firstName} {contract.employees[0].secondName}
          </h5>
          <h5>{contract.contractStart}</h5>
          <h5>{contract.contractEnd}</h5>
        </div>
      ))}
    </div>
  );
};

export default Contract;
