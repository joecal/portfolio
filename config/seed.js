var mongoose  = require("mongoose");
var db = require('./db');
var mongooseContact  = require("../app/models/contact");
var mongooseSkill  = require("../app/models/skill");
var contactSeedData  = require("./contactSeeds");
var skillSeedData  = require("./skillSeeds");

mongoose.connect(db.url);

var Contact = mongooseContact.model("Contact");
var Skill = mongooseSkill.model("Skill");

Contact.remove({}).then(function(){
  Contact.collection.insert(contactSeedData).then(function(){
    process.exit();
  });
});

Skill.remove({}).then(function(){
  Skill.collection.insert(skillSeedData).then(function(){
    process.exit();
  });
});
