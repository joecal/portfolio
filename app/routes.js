// app/routes.js

// grab the contact model
var Contact = require('./models/contact');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/contacts', function(req, res) {
            // use mongoose to get all contacts in the database
            Contact.find(function(err, contacts) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(contacts); // return all contacts in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };



    // // Connect to MongoDB using Mongoose
    // var mongoose = require('mongoose');
    // var db = mongoose.createConnection('localhost', 'portfolioApp');
    //
    // // Get Contact schema and model
    // var ContactSchema = require('./models/contact.js').ContactSchema;
    // var SkillSchema = require('./models/skill.js').SkillSchema;
    // var Contact = db.model('contacts', ContactSchema);
    // var Skill = db.model('skills', SkillSchema);
    //
    // // Main application view
    // exports.home = function(req, res) {
    // 	res.render('../public/views/home.html');
    // };
    //
    // // JSON API for list of contacts
    // exports.list = function(req, res) {
    // 	// Query Mongo for contacts, just get back the name text
    // 	Contact.find({}, 'name', function(error, contacts) {
    // 		res.json(contacts);
    // 	});
    // };
    //
    // // JSON API for getting a single contact
    // exports.contact = function(req, res) {
    // 	// Contact ID comes in the URL
    // 	var contactId = req.params.id;
    //
    // 	// Find the contact by its ID, use lean as we won't be changing it
    // 	Contact.findById(contactId, '', { lean: true }, function(err, contact) {
    // 		if(contact) {
    // 			res.json(contact);
    // 		} else {
    // 			res.json({error:true});
    // 		}
    // 	});
    // };
    //
    // // JSON API for creating a new contact
    // exports.create = function(req, res) {
    // 	var reqBody = req.body,
    // 			// Build up contact object to save
    // 			contactObj = {name: reqBody.name, email: reqBody.email, message: reqBody.message};
    //
    // 	// Create contact model from built up contact object
    // 	var contact = new Contact(contactObj);
    //
    // 	// Save contact to DB
    // 	contact.save(function(err, doc) {
    // 		if(err || !doc) {
    // 			throw 'Error';
    // 		} else {
    // 			res.json(doc);
    // 		}
    // 	});
    // };
