import React, { useState, useEffect } from 'react';
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
  emailRecipentInput,
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
    emailAttachment,
    isLoading,
    selectedContractMail,
  } = useSelector((state) => ({
    ...state.SendMailReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const [clicked, setClicked] = useState(false);

  const handleEmailBody = (e) => {
    dispatch(emailBodyInput(e.target.value));
  };

  const handleEmailSubject = (e) => {
    dispatch(emailSubjectInput(e.target.value));
  };

  const handleEmailRecipient = (e) => {
    setClicked(true);
    dispatch(emailRecipentInput(e.target.value));
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

  return (
    <div>
      <Typography variant="h4">Mail</Typography>
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
        <CircularProgress className={classes.mailProgress} />
      )}
      <form className={classes.mailForm} disabled={isLoading === true}>
        <Typography variant="h6" className={classes.mailSub}>
          SEND MAIL
        </Typography>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>RECIPIENT</InputLabel>
          {/* <InputBase
            id="recipient"
            type="email"
            value={
              !clicked
                ? selectedContractMail.employees[0].emailAddress
                : emailRecipient
            }
            onChange={handleEmailRecipient}
            placeholder="example@example.com"
          /> */}
          <Select
            id="recipient"
            value={emailRecipient}
            onChange={handleEmailRecipient}
          >
            <MenuItem value={selectedContractMail.employees[0].emailAddress}>
              {selectedContractMail.employees[0].emailAddress}
            </MenuItem>
          </Select>
        </FormGroup>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>SUBJECT</InputLabel>
          {/* <InputBase
            id="subject"
            type="text"
            // value={emailSubject}
            value="Contract Extension"
            // defaultValue={'Contract Extention #'}
            onChange={handleEmailSubject}
            placeholder="subject of email..."
          /> */}
          <Select
            id="subject"
            value={emailSubject}
            onChange={handleEmailSubject}
          >
            <MenuItem value="Contract Extention">Contract Extention</MenuItem>
            <MenuItem value="Contract Termination">
              Contract Termination
            </MenuItem>
          </Select>
        </FormGroup>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>MESSAGE</InputLabel>
          <InputBase
            id="message"
            type="text"
            multiline="true"
            rows="8"
            value={emailBody}
            placeholder="Enter message..."
            onChange={handleEmailBody}
          />
        </FormGroup>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>Attachment</InputLabel>
          <InputBase type="file" onChange={handleEmailAttachment} />
        </FormGroup>
        <FormGroup className={classes.mailBtnGroup}>
          <Button
            onClick={handleSubmit}
            disabled={isLoading === true}
            className={classes.mailButton}
          >
            Send <MailOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};
export default SendMail;
