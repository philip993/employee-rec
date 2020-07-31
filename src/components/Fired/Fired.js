import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions

// Material Ui
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { requestGetContracts } from '../Contract/ContractActions';

const Fired = () => {
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
      <Typography variant="h4" className={classes.pageSubtitle}>
        Fired
      </Typography>
      {contractList.employeeStatus === 'inactive' ? (
        'EMPTY'
      ) : (
        <Table className={classes.tableLayoutSmall}>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.tableHeaderCell}>ID</TableCell>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contractList
              .filter((cnrct) => cnrct.activeContract === false)
              .map((cont) => (
                <TableRow key={cont.id}>
                  <TableCell className={classes.tableCell}>
                    {cont.contractId}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {cont.employees[0].firstName} {cont.employees[0].secondName}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Fired;
