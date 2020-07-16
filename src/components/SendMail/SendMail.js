import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Reduc Actions
import {
  requesstSendMail,
  emailBodyInput,
  emailSubjectInput,
  emailRecipentInput,
} from './SendMailActions';
// Material Ui
import {
  InputBase,
  Button,
  Typography,
  InputLabel,
  FormGroup,
} from '@material-ui/core';

const SendMail = () => {
  const {
    emailBody,
    emailSubject,
    emailRecipient,
    sendMailError,
  } = useSelector((state) => state.SendMailReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmailBody = (e) => {
    dispatch(emailBodyInput(e.target.value));
  };

  const handleEmailSubject = (e) => {
    dispatch(emailSubjectInput(e.target.value));
  };

  const handleEmailRecipient = (e) => {
    dispatch(emailRecipentInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form>
        <Typography variant="h6">MAIL FORM</Typography>
        <FormGroup>
          <InputLabel>RECIPIENT</InputLabel>
          <InputBase
            value={emailRecipient}
            onChange={handleEmailRecipient}
            placeholder="RECIPIENT"
          />
        </FormGroup>
        <FormGroup>
          <InputLabel>SUBJECT</InputLabel>
          <InputBase
            value={emailSubject}
            onChange={handleEmailSubject}
            placeholder="EMAIL SUBJECT"
          />
        </FormGroup>
        <FormGroup>
          <InputLabel>MESSAGE</InputLabel>
          <InputBase
            type="text"
            multiline="true"
            rows="10"
            value={emailBody}
            placeholder="MESSAGE EMAIL"
            onChange={handleEmailBody}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSubmit}>Send</Button>
        </FormGroup>
      </form>
    </div>
  );
};
export default SendMail;
