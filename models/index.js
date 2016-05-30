var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

 module.exports.Destination = require("./campsite.js");
module.exports.Profile = require("./campsite.js");
