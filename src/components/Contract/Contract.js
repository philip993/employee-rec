import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import { requestGetContracts } from './ContractActions';
// Material Ui
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  selectContract,
  requestEndContract,
} from '../UpdateContract/UpdateContractActions';

const Contract = () => {
  const { contractList, currentDate } = useSelector((state) => ({
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  useEffect(() => {
    dispatch(requestGetContracts());
  }, []);

  const handleUpdateContract = (e) => {
    console.log(e);
    dispatch(selectContract(e));
    history.push('/updatecontract');
  };

  const handleTerminateContract = (e) => {
    console.log(e);
    dispatch(selectContract(e));
    dispatch(requestEndContract());
  };

  return (
    <div>
      <Typography variant="h4">Contract</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>FULL NAME</TableCell>
            <TableCell>START</TableCell>
            <TableCell>END</TableCell>
            <TableCell>DAYS</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contractList.map((contract) =>
            contract.activeContract === true ? (
              <TableRow key={contract.id}>
                <TableCell>{contract.contractId}</TableCell>
                <TableCell>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell>{contract.contractStart}</TableCell>
                <TableCell>{contract.contractEnd}</TableCell>
                <TableCell hidden disabled>
                  {
                    (contract.daysLeft = Math.floor(
                      Math.ceil(
                        (new Date(contract.contractEnd) - currentDate) /
                          (1000 * 60 * 60 * 24)
                      )
                    ))
                  }
                </TableCell>

                {contract.daysLeft < 0 ? (
                  <TableCell>EXPIRED</TableCell>
                ) : (
                  <TableCell>VALID</TableCell>
                )}
                <TableCell>
                  <Button onClick={handleUpdateContract.bind(this, contract)}>
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={handleTerminateContract.bind(this, contract)}
                  >
                    Terminate
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>{contract.contractId}</TableCell>
                <TableCell>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell>{contract.contractStart}</TableCell>
                <TableCell>{contract.contractEnd}</TableCell>
                <TableCell>/</TableCell>
                <TableCell>FIRED</TableCell>
                <TableCell>/</TableCell>
                <TableCell>/</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Contract;
