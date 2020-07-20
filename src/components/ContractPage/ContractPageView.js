import React from 'react';

// Style
import Style from '../Style/Style';
// Material Ui
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from '@material-ui/core';

const ContractPageView = ({
  id,
  contractId,
  activeContract,
  contractStart,
  contractEnd,
  employees,
}) => {
  const classes = Style();

  return (
    <div className={classes.contractPage}>
      <Card id="pdf-table">
        <div className={classes.contractCompany}>
          <Avatar className={classes.contractAvatar}>VT</Avatar>
          <Typography variant="h6">VIRTUAL TRADE COMPANY</Typography>
          <Typography variant="p">Lakeside 1B, Ohio, US</Typography>
        </div>

        <CardContent className={classes.contractPersonal}>
          <Typography variant="h4" className={classes.contractSub}>
            EMPLOYMENT CONTRACT
          </Typography>
          <Typography variant="h5">EMPLOYEE ID #{contractId}</Typography>
          <div className={classes.contractInfoLeft}>
            <Typography variant="h5">
              {employees[0].firstName} {employees[0].secondName}
            </Typography>
            <Typography variant="h6">
              {employees[0].address}, {employees[0].city}, {employees[0].state}
            </Typography>
          </div>

          <div className={classes.contractInfoRight}>
            <Typography variant="h6">start date: {contractStart}</Typography>
            <Typography variant="h6">end date: {contractEnd}</Typography>
          </div>
          <div className={classes.contractDetails}>
            <Typography variant="h6">
              Contract with id number # {id} between VIRTUAL COMPANY in the
              following text as Employer and {employees[0].firstName}{' '}
              {employees[0].secondName} in the following text as Employee. The
              employer will provide conditions suitable for work and pay the
              amount specified above. Also the employee will do all of his/her
              responsibilities described in the job post.
            </Typography>
          </div>
          <div className={classes.contractSignLeft}>
            <Typography variant="h6">COMPANY SIGNATURE</Typography>
            <Typography>______________</Typography>
          </div>
          <div className={classes.contractSignRight}>
            <Typography variant="h6">EMPLOYEE SIGNATURE</Typography>
            <Typography>______________</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContractPageView;
