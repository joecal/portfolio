var mongoose  = require("mongoose");
var db = require('./db');
var mongooseContact  = require("../app/models/contact");
var seedData  = require("./seeds");

mongoose.connect(db.url);

var Contact = mongooseContact.model("Contact");

Contact.remove({}).then(function(){
  Contact.collection.insert(seedData).then(function(){
    process.exit();
  });
});
