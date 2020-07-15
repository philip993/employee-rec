import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
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
  const { emailBody, emailSubject, emailRecipient } = useSelector(
    (state) => state.SendMailReducer
  );
  const dispatch = useDispatch();

  const handleEmailBody = (e) => {
    console.log(e.target.value);
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
