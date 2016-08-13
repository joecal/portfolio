// grab the contact model
var mongoose = require('./models/contact');
var Contact = mongoose.model("Contact");

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
<<<<<<< HEAD
var transporter = nodemailer.createTransport('smtps://jcalvillo757%40gmail.com:pass@smtp.gmail.com');
=======
var transporter = nodemailer.createTransport('smtps://jcalvillo757%40gmail.com:password@smtp.gmail.com');
>>>>>>> 80620b6... Cleaned up and added a Readme

  module.exports = function(app) {

      // server routes ===========================================================

      // get all contacts api route
      app.get("/api/contacts", function (req, res) {
        Contact.find({}).lean().exec().then(function (contacts) {
          res.json(contacts);
        })
      })

      // create contact api route
      app.post("/api/contacts", function(req, res){
        Contact.create(req.body.contact).then(function(contact){
        })
        var mailOptions = {
          from: req.body.contact.email,
          to: 'jcalvillo757@gmail.com',
          subject: 'Message from ' + req.body.contact.name,
          html: '<b>' + 'From: ' + req.body.contact.email + ' Message: ' + req.body.contact.message + '</b>',
          text: req.body.contact.message
        }
        console.log(mailOptions)
        transporter.sendMail(mailOptions, function(error, info){
          transporter.close();
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
          res.redirect("/contact");
      });

      // route to handle delete goes here (app.delete)

      // frontend routes =========================================================
      // route to handle all angular requests
      app.get('*', function(req, res) {
          res.sendfile('./public/index.html'); // load public/index.html file
      });
  };
