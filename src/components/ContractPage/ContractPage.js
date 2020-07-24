import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
// Material Ui
import { Typography } from '@material-ui/core';
import ContractPageView from './ContractPageView';
import PdfPage from '../PdfPage/PdfPage';

const ContractPage = () => {
  const { contractDetails } = useSelector((state) => ({
    ...state.ContractPageReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();

  return (
    <div>
      <Typography variant="h4" className={classes.pageSubheader}>
        Contract Page
      </Typography>
      {contractDetails.map(({ id, ...otherProps }, index) => (
        <ContractPageView key={id} {...otherProps} />
      ))}
      <div className={classes.contractBtnSpan}>
        <PdfPage />
      </div>
    </div>
  );
};

export default ContractPage;
