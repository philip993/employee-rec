import React from 'react';

// Styles
import Styles from '../Style/Style';
// Material-Ui
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

const DetailsView = ({
  id,
  firstName,
  secondName,
  age,
  gender,
  position,
  workDepartment,
  employmentDate,
  address,
  city,
  state,
  socialNumber,
  identityCard,
  telephoneNumber,
  emailAddress,
  contract,
  shift,
}) => {
  const classes = Styles();

  return (
    <div>
      <Card className={classes.cardLayout}>
        <CardContent className={classes.cardPersonal}>
          <Avatar className={classes.avatar}>
            {firstName.charAt(0)}
            {secondName.charAt(0)}
          </Avatar>
          <Typography variant="h5">
            {firstName} {secondName}
          </Typography>
          <Typography variant="h6">{age} years</Typography>
          <Typography variant="h6">{gender === 'male' ? 'M' : 'F'}</Typography>
        </CardContent>
        <CardContent>
          <Table className={classes.tableLayoutMedium}>
            <TableHead>
              <Typography variant="h6" className={classes.tableHeadCell}>
                Employment Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Position
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {position}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Work Department
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {workDepartment}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Employment Date
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {employmentDate}
              </TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.tableHeadCell}>
                Address Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Address
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {address}, {city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>State</TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {state}
              </TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.tableHeadCell}>
                Identity Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Identity Card No.
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {identityCard}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Social Security No.
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {socialNumber}
              </TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.tableHeadCell}>
                Contact Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                Telephone Number
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {telephoneNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablePositionCell}>
                E-mail Address
              </TableCell>
              <TableCell className={classes.tableCellBoldStyle}>
                {emailAddress}
              </TableCell>
            </TableRow>
            {!contract ? (
              <React.Fragment>
                <Typography variant="h6" className={classes.tableHeadCell}>
                  Contract
                </Typography>
                <TableRow>
                  <TableCell colSpan={2} className={classes.tablePositionCell}>
                    No Contract Info
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TableHead>
                  <Typography variant="h6" className={classes.tableHeadCell}>
                    Contract
                  </Typography>
                </TableHead>

                {contract.activeContract ? (
                  <React.Fragment>
                    <TableRow>
                      <TableCell className={classes.tablePositionCell}>
                        Start/End:
                      </TableCell>
                      <TableCell className={classes.tableCellBoldStyle}>
                        {contract.contractStart} / {contract.contractEnd}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tablePositionCell}>
                        Salary
                      </TableCell>
                      <TableCell className={classes.tableCellBoldStyle}>
                        {contract.salary} $
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className={classes.tablePositionCell}
                    >
                      FIRED
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            )}
            {!shift ? (
              <React.Fragment>
                <Typography variant="h6" className={classes.tableHeadCell}>
                  Shift
                </Typography>
                <TableRow>
                  <TableCell colSpan={2} className={classes.tablePositionCell}>
                    No Shift Info
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TableHead>
                  <Typography variant="h6" className={classes.tableHeadCell}>
                    Shift
                  </Typography>
                </TableHead>

                <TableRow>
                  <TableCell className={classes.tablePositionCell}>
                    Start/End:
                  </TableCell>
                  <TableCell className={classes.tableCellBoldStyle}>
                    {shift.startDate} / {shift.endDate}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tablePositionCell}>
                    Shift
                  </TableCell>
                  <TableCell className={classes.tableCellBoldStyle}>
                    {shift.shiftCode}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            )}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsView;
