const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const creds = require('./config/config');

const app = express();
const port = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

// nodemailer
app.post('/send', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
});

var mailOptions = {
  from: data.email,
  to: 'desinoelle@gmail.com',
  subject: 'My Website',
  html: `<p>From: ${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})