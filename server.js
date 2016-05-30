// require express and other modules
var express = require('express'),
    app = express();
var mongoose = require('mongoose');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static(__dirname + '/public'));

var destinations = [];

destinations.push({
  _id: 1,
  country: 'https://www.google.com/maps/place/Canada/@35.1453591,-157.6503695,3z/data=!3m1!4b1!4m5!3m4!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!8m2!3d56.130366!4d-106.346771',
  city: 'http://postmediavancouversun.files.wordpress.com/2011/08/vancouver1.jpg',
  season: 'Summer'
});
destinations.push({
  _id: 2,
  country: 'https://www.google.com/maps/place/St+Kitts/data=!4m2!3m1!1s0x8c121c7cbb89c1b3:0xddc8340c0ae20e02?sa=X&ved=0ahUKEwiZioulwILNAhUKS2MKHS8-Dy0Q8gEIkAEwDw',
  city: 'http://skncoc.org/wp-content/uploads/2015/03/beach-st-kitts.jpg',
  season: 'Fall'
});
destinations.push({
  _id: 3,
  country: 'https://www.google.com/maps/place/United+States/@31.7860603,-132.0853276,3z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891',
  city: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178286/Miami-21371.jpg',
});

var profile = {
name: 'Matt Sullivan',
github_link: 'https:///github.com/sully1313',
github_profile_image:'https://avatars1.githubusercontent.com/u/16328122?v=3&s=460',
current_city: 'San Francisco',
pets: [{name: 'Bailey', type: 'Dog'}, {name: 'Zolie', type: 'Dog'}],
};
/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 app.get('/api', function api_index(req, res){
   res.json({
     message: "Welcome to IDK WHAT THIS IS",
     documentation_url: 'https://github.com/sully1313/express-personal-api',
     base_url: 'https://secure-earth-69846.herokuapp.com/',
     endpoints: [
     {method: "GET", path: "/api", description: "Describes all available endpoints"},
     {method: "GET", path: "/api/profile", description: "Matt's App"},
     {method: "POST", path: "/api/campsite", description: "destinations"}
   ]
   });
 });

app.get('/api/profile', function profile_index(req, res){
  db.Profile.find({}, function(err, profile){
    res.json(profile);
  })
});

app.get('/api/campsite', function destination_index(req, res){
  db.Destination.find({}, function(err, destinations){
    res.json(destinations);
  })
})


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
