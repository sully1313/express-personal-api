var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DestinationSchema = new Schema({
  country: String,
  city: String,
  season: String
});

var ProfileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [String],
});

var Destination = mongoose.model('Destination', DestinationSchema);
var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Destination, Profile;
