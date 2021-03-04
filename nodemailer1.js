var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  type:"SMTP",
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'usermailid@gmail.com',
    pass: 'userpassword'
  }
});

var mailOptions = {
  from: 'from mailid',
  to: 'tomail id',
  subject: 'greeting',
  text: 'hello world !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});