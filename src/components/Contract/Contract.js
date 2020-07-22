import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import { requestGetContracts } from './ContractActions';
import {
  selectContract,
  requestEndContract,
} from '../UpdateContract/UpdateContractActions';
import {
  selectContractMail,
  emailRecipentInput,
} from '../SendMail/SendMailActions';
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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { requestContractPage } from '../ContractPage/ContractPageActions';

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

  const handleMailSend = (e) => {
    console.log(e);
    dispatch(selectContractMail(e));
    history.push('/sendmail');
    dispatch(emailRecipentInput(e.employees[0].emailAddress));
  };

  const handleContractPage = (e) => {
    console.log(e);
    dispatch(requestContractPage(e.contractId));
    history.push('/contractpage');
  };

  return (
    <div>
      <Typography variant="h4">Contract</Typography>
      <Table className={classes.contractTable}>
        <TableHead>
          <TableRow className={classes.contractHeader}>
            <TableCell>ID</TableCell>
            <TableCell>FULL NAME</TableCell>
            <TableCell>START</TableCell>
            <TableCell>END</TableCell>
            <TableCell>DAYS</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>UPDATE</TableCell>
            <TableCell>TERMINATE</TableCell>
            <TableCell>MAIL</TableCell>
            <TableCell>LAYOUT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contractList.map((contract) =>
            contract.activeContract === true ? (
              <TableRow key={contract.id}>
                <TableCell className={classes.contractCell}>
                  {contract.contractId}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.contractStart}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.contractEnd}
                </TableCell>
                <TableCell className={classes.contractCell} hidden disabled>
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
                  <TableCell className={classes.contractCell}>
                    EXPIRED
                  </TableCell>
                ) : (
                  <TableCell className={classes.contractCell}>VALID</TableCell>
                )}
                <TableCell className={classes.contractCellTwo}>
                  <Button onClick={handleUpdateContract.bind(this, contract)}>
                    <DescriptionIcon />
                  </Button>
                </TableCell>
                <TableCell className={classes.contractCellTwo}>
                  <Button
                    className={classes.contractTerminateBtn}
                    onClick={handleTerminateContract.bind(this, contract)}
                  >
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
                <TableCell className={classes.contractCellTwo}>
                  <Button onClick={handleMailSend.bind(this, contract)}>
                    <EmailIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={handleContractPage.bind(this, contract)}>
                    <FileCopyIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell className={classes.contractCell}>
                  {contract.contractId}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.contractStart}
                </TableCell>
                <TableCell className={classes.contractCell}>
                  {contract.contractEnd}
                </TableCell>
                <TableCell className={classes.contractCell}>/</TableCell>
                <TableCell className={classes.contractCell}>FIRED</TableCell>
                <TableCell className={classes.contractCellTwo}>/</TableCell>
                <TableCell className={classes.contractCellTwo}>/</TableCell>
                <TableCell className={classes.contractCellTwo}>
                  <Button onClick={handleMailSend.bind(this, contract)}>
                    <EmailIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={handleContractPage.bind(this, contract)}>
                    <FileCopyIcon />
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Contract;
