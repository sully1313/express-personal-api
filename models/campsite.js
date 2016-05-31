var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DestinationSchema = new Schema({
  country: String,
  city: String,
  season: String
});


var Destination = mongoose.model('Destination', DestinationSchema);
module.exports = Destination;
