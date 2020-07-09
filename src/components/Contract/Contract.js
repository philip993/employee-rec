import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import { requestGetContracts } from './ContractActions';
// Material Ui
import { Typography } from '@material-ui/core';

const Contract = () => {
  const { contractList, currentDate } = useSelector((state) => ({
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestGetContracts());
  }, []);

  const handleUpdateContract = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Typography variant="h4">Contract</Typography>
      {contractList.map((contract, index) =>
        contract.activeContract === true ? (
          <div key={contract.id}>
            <h5>
              {contract.contractId}. {contract.employees[0].firstName}{' '}
              {contract.employees[0].secondName}
            </h5>
            <h5>{contract.contractStart}</h5>
            <h5>{contract.contractEnd}</h5>
            <h5 hidden disabled>
              {
                (contract.daysLeft = Math.floor(
                  Math.ceil(
                    (new Date(contract.contractEnd) - currentDate) /
                      (1000 * 60 * 60 * 24)
                  )
                ))
              }
            </h5>
            <h5>
              {contract.daysLeft < 0 ? (
                <div style={{ color: 'red' }}>
                  <p>{contract.daysLeft}</p>
                  <p>EXPIRED</p>
                </div>
              ) : (
                <div style={{ color: 'green' }}>
                  <p>{contract.daysLeft}</p>
                  <p>VALID</p>
                </div>
              )}
            </h5>
          </div>
        ) : (
          <div key={contract.id}>
            <p>
              {contract.id}. {contract.employees[0].firstName}{' '}
              {contract.employees[0].secondName}
            </p>
            <p>FIRED</p>
          </div>
        )
      )}
    </div>
  );
};

export default Contract;
