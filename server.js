
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});





app.post('/contact', function(req, res){
    var mailOptions = {
        from: req.body.email,
        to: 'your email address',
        subject: req.body.subject,
        text: req.body.commment
      };


      

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

})