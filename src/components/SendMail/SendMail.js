import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
import './SendMailStyle.scss';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import {
  requesstSendMail,
  emailBodyInput,
  emailSubjectInput,
  emailAttachmentName,
  toggleLoaderTrue,
} from './SendMailActions';
// Material Ui
import {
  InputBase,
  Button,
  Typography,
  InputLabel,
  FormGroup,
  CircularProgress,
  Select,
  MenuItem,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const SendMail = () => {
  const {
    emailBody,
    emailSubject,
    emailRecipient,
    sendMailError,
    isLoading,
    selectedContractMail,
  } = useSelector((state) => ({
    ...state.SendMailReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const [hide, setHidden] = useState(null);

  const handleEmailBody = (e) => {
    setHidden(true);
    dispatch(emailBodyInput(e.target.value));
  };

  const handleEmailSubject = (e) => {
    dispatch(emailSubjectInput(e.target.value));
  };

  const handleEmailAttachment = (e) => {
    let file = e.target.files[0];
    console.log(file.name);
    dispatch(emailAttachmentName(file.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleLoaderTrue());
    dispatch(requesstSendMail());
  };

  let expiredContract = `
   Dear  ${selectedContractMail.employees[0].firstName},

   Your contract with ID ${selectedContractMail.id} is expired. It will be 
   automatically extended from ${selectedContractMail.contractStart} 
   for 90 days.
   In attachment is a copy for the Contract.
   Please contact HR if you have any 
   questions related to this matter.

   Kind regards
  `;

  let terminatedContract = `
  Dear ${selectedContractMail.employees[0].firstName},

  We are sincearly sorry to inform you that 
  your contract with ID ${selectedContractMail.id} will be terminated.
  We will no longer require your services at 
  our company.

  Kind regards
  `;

  return (
    <div>
      <Typography variant="h4" className={classes.pageSubtitle}>
        Mail
      </Typography>
      {sendMailError === null
        ? ''
        : sendMailError === false
        ? history.push('/mailsuccess')
        : history.push('/mailfail')}

      {isLoading === null ? (
        ''
      ) : isLoading === false ? (
        ''
      ) : (
        <CircularProgress className={classes.spinner} />
      )}
      <form className={classes.formLayout} disabled={isLoading === true}>
        <Typography variant="h6" className={classes.formTitle}>
          SEND MAIL
        </Typography>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>RECIPIENT</InputLabel>
          <InputBase
            id="recipient"
            type="email"
            value={emailRecipient}
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>SUBJECT</InputLabel>
          <Select
            id="subject"
            value={emailSubject}
            onChange={handleEmailSubject}
          >
            <MenuItem value="Contract Extension">Contract Extention</MenuItem>
            <MenuItem value="Contract Termination">
              Contract Termination
            </MenuItem>
          </Select>
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>MESSAGE</InputLabel>
          <Select id="msgOption" onChange={handleEmailBody} disabled={hide}>
            <MenuItem value={expiredContract}>
              Default Extension Message
            </MenuItem>
            <MenuItem value={terminatedContract}>
              Default Termination Message
            </MenuItem>
          </Select>
          <InputBase
            id="message"
            type="text"
            multiline="true"
            rows="10"
            value={emailBody}
            placeholder="Preview.."
            onChange={handleEmailBody}
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>Attachment</InputLabel>
          <InputBase type="file" onChange={handleEmailAttachment} />
        </FormGroup>
        <FormGroup className={classes.buttonNormalSpan}>
          <Button
            onClick={handleSubmit}
            disabled={isLoading === true}
            className={classes.formButton}
          >
            Send <MailOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};
export default SendMail;
