import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
import './Contract.scss';
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
import { requestContractPage } from '../ContractPage/ContractPageActions';
import { requestDeleteShift } from '../UpdateShift/UpdateShiftActions';
// Material Ui
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Popper,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Alert } from '@material-ui/lab';

const Contract = () => {
  const { contractList, currentDate } = useSelector((state) => ({
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const [preview, setPreview] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(requestGetContracts());
  }, []);

  const handleUpdateContract = (e) => {
    dispatch(selectContract(e));
    history.push('/updatecontract');
  };

  const handleTerminateContract = (e) => {
    console.log(e);
    dispatch(selectContract(e));
    dispatch(requestEndContract());
    dispatch(requestDeleteShift(e.id));
    window.location.reload();
  };

  const handleMailSend = (e) => {
    dispatch(selectContractMail(e));
    history.push('/sendmail');
    dispatch(emailRecipentInput(e.employees[0].emailAddress));
  };

  const handleContractPage = (e) => {
    dispatch(requestContractPage(e.contractId));
    history.push('/contractpage');
  };

  const handlePreview = (e) => {
    setPreview(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClosePreview = () => {
    setPreview(false);
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4" className={classes.pageSubtitle}>
        Contracts
      </Typography>
      <Table className={classes.tableLayout}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>FULL NAME</TableCell>
            <TableCell className={classes.tableHeaderCell}>START</TableCell>
            <TableCell className={classes.tableHeaderCell}>END</TableCell>
            <TableCell className={classes.tableHeaderCell}>DAYS</TableCell>
            <TableCell className={classes.tableHeaderCell}>STATUS</TableCell>
            <TableCell className={classes.tableHeaderCell}>UPDATE</TableCell>
            <TableCell className={classes.tableHeaderCell}>TERMINATE</TableCell>
            <TableCell className={classes.tableHeaderCell}>MAIL</TableCell>
            <TableCell className={classes.tableHeaderCell}>LAYOUT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contractList.map((contract) =>
            contract.activeContract === true ? (
              <TableRow key={contract.id}>
                <TableCell className={classes.tableCell}>
                  {contract.contractId}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.contractStart}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.contractEnd}
                </TableCell>
                <TableCell className={classes.tableCell} hidden disabled>
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
                  <TableCell className={classes.tableCell}>EXPIRED</TableCell>
                ) : (
                  <TableCell className={classes.tableCell}>VALID</TableCell>
                )}
                <TableCell
                  className={classes.tableCellMiddle}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleUpdateContract.bind(this, contract)}>
                    <DescriptionIcon />
                  </Button>
                </TableCell>
                <TableCell
                  className={classes.tableCellMiddle}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button
                    className={classes.terminateButton}
                    onClick={handleTerminateContract.bind(this, contract)}
                  >
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
                <TableCell
                  className={classes.tableCellMiddle}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleMailSend.bind(this, contract)}>
                    <EmailIcon />
                  </Button>
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleContractPage.bind(this, contract)}>
                    <FileCopyIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell className={classes.tableCell}>
                  {contract.contractId}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.employees[0].firstName}{' '}
                  {contract.employees[0].secondName}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.contractStart}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {contract.contractEnd}
                </TableCell>
                <TableCell className={classes.tableCell}>/</TableCell>
                <TableCell className={classes.tableCell}>FIRED</TableCell>
                <TableCell className={classes.tableCellMiddle}>/</TableCell>
                <TableCell className={classes.tableCellMiddle}>/</TableCell>
                <TableCell
                  className={classes.tableCellMiddle}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleMailSend.bind(this, contract)}>
                    <EmailIcon />
                  </Button>
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleContractPage.bind(this, contract)}>
                    <FileCopyIcon />
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Popper className="popup" open={preview} anchorEl={anchorEl}>
        <Alert severity="info">Action</Alert>
      </Popper>
    </div>
  );
};

export default Contract;
