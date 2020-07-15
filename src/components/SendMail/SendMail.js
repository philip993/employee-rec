import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Reduc Actions
import { requesstSendMail, emailBodyInput } from './SendMailActions';
// Material Ui
import { InputBase, Button, Typography } from '@material-ui/core';

const SendMail = () => {
  const { emailBody } = useSelector((state) => state.SendMailReducer);
  const dispatch = useDispatch();

  const handleEmailBody = (e) => {
    console.log(e.target.value);
    dispatch(emailBodyInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requesstSendMail());
  };

  return (
    <div>
      <Typography variant="h4">Mail</Typography>
      <form>
        <InputBase
          type="text"
          value={emailBody}
          placeholder="MESSAGE EMAIL"
          onChange={handleEmailBody}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </form>
    </div>
  );
};
export default SendMail;
