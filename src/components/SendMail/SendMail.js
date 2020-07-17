import React from 'react';
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
  emailAttachmentInput,
} from './SendMailActions';
// Material Ui
import {
  InputBase,
  Button,
  Typography,
  InputLabel,
  FormGroup,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const SendMail = () => {
  const {
    emailBody,
    emailSubject,
    emailRecipient,
    sendMailError,
    emailAttachment,
  } = useSelector((state) => state.SendMailReducer);
  const dispatch = useDispatch();
  const classes = Style();
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

  const handleEmailAttachment = (e) => {
    console.log(e.currentTarget.files[0]);
    dispatch(emailAttachmentInput(e.target.value));
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
      <form className={classes.mailForm}>
        <Typography variant="h6" className={classes.mailSub}>
          SEND MAIL
        </Typography>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>RECIPIENT</InputLabel>
          <InputBase
            id="recipient"
            type="email"
            value={emailRecipient}
            onChange={handleEmailRecipient}
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>SUBJECT</InputLabel>
          <InputBase
            id="subject"
            type="text"
            value={emailSubject}
            onChange={handleEmailSubject}
            placeholder="subject of email..."
          />
        </FormGroup>
        <FormGroup className={classes.mailFormGroup}>
          <InputLabel className={classes.mailLabel}>MESSAGE</InputLabel>
          <InputBase
            id="message"
            type="text"
            multiline="true"
            rows="12"
            value={emailBody}
            placeholder="Enter message..."
            onChange={handleEmailBody}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel>Attachment</InputLabel>
          <InputBase
            type="file"
            value={emailAttachment}
            onChange={handleEmailAttachment}
          />
        </FormGroup>
        <FormGroup className={classes.mailBtnGroup}>
          <Button onClick={handleSubmit} className={classes.mailButton}>
            Send <MailOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};
export default SendMail;
