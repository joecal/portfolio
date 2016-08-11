// grab the mongoose module
var mongoose  = require("mongoose");
var db = require('../../config/db');

var ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String
  }
);

mongoose.model("Contact", ContactSchema);
mongoose.createConnection(db.url);

module.exports = mongoose;
