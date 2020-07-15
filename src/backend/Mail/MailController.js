require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendMail = (req, res) => {
  let { emailRecipient, emailBody, emailSubject } = req.body;
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
    to: emailRecipient,
    subject: emailSubject,
    text: emailBody,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent:', info.messageId);
  });
};
