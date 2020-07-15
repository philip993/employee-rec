require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendMail = (req, res) => {
  let { reciepient, sender, emailBody } = req.body;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PW,
    },
    tls: {
      rejectUnathorized: false,
    },
  });

  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: process.env.TEST_EMAIL,
    subject: 'Second Email',
    text: 'This is first email sent from Server.',
    message: emailBody,
    // html: '<b>From APP something </b>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent:', info.messageId);
  });
};
