import { MailForm } from '@/components/Form';
const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message }: MailForm) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PW,
    },
  });

  // send mail with defined transport object
  const mailData = {
    from: email,
    to: process.env.NODEMAILER_USER,
    subject,
    html: `
    <h1>${subject}</h1>
    <p>${message}</p>
    </br>
    <p>발신자:${email}</p>
    `,
  };

  return transporter.sendMail(mailData);
};

export default sendEmail;
