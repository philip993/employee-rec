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
  TableBody,
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
          <Typography variant="p">{gender}</Typography>
        </CardContent>
        <CardContent>
          <Table>
            <TableHead>
              <Typography variant="h6" className={classes.cardTitle}>
                Employment Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell>position</TableCell>
              <TableCell>{position}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Work Department</TableCell>
              <TableCell>{workDepartment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Employment Date</TableCell>
              <TableCell>{employmentDate}</TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.cardTitle}>
                Address Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                {address}, {city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell>{state}</TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.cardTitle}>
                Identity Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell>Identity Card No.</TableCell>
              <TableCell>{identityCard}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Security No.</TableCell>
              <TableCell>{socialNumber}</TableCell>
            </TableRow>
            <TableHead>
              <Typography variant="h6" className={classes.cardTitle}>
                Contact Information
              </Typography>
            </TableHead>
            <TableRow>
              <TableCell>Telephone Number</TableCell>
              <TableCell>{telephoneNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-mail Address</TableCell>
              <TableCell>{emailAddress}</TableCell>
            </TableRow>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsView;
