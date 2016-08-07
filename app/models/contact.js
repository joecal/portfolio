// grab the mongoose module
var mongoose = require('mongoose');

exports.ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String
  }
);
