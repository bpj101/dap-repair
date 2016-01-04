'use strict';
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact' 
  });
});

router.post('/send',function(req,res) { 
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
      auth: {
          user: 'bpj101@dameagnesproductions.com',
          pass: 'sanDee@191'
      }
    });

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Paul Julian ✔ <bpj101@gmail>', // sender address
      to: 'bpj101@dameagnesproductions.com', // list of receivers
      subject: 'Repair Site Contact Info', // Subject line
      text: 'You have a submission with the following... Name: '+req.body.name +'Email: ' +req.body.email +'Message: ' +req.body.message, // plaintext body
      html: '<p>You have a submission with the following... </p><ul><li>Name: '+req.body.name+'</li><li>Email: ' +req.body.email +'</li><li>Message: ' +req.body.message +'</li>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.redirect('/');
      }
      console.log('Message sent: ' + info.response);
      res.redirect('/');
  });
});

module.exports = router;