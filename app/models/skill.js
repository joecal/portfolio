// grab the mongoose module
var mongoose = require('mongoose');

exports.SkillSchema = new mongoose.Schema(
  {
    skill: String,
    image: String
  }
);
