// require express and other modules
var express = require('express'),
app = express();
var mongoose = require('mongoose');
var db = require('./models');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static(__dirname + 'public'));
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
     message: "Welcome to limiting my creativity 101",
     documentation_url: 'https://github.com/sully1313/express-personal-api',
     base_url: 'https://secure-earth-69846.herokuapp.com/',
     endpoints: [
     {method: "GET", path: "/api", description: "Describes all available endpoints"},
     ]
   });
 });

app.get('/profile', function profile_index(req, res){
  db.Profile.find({}, function(err, profile){
    res.json(profile);
  })
});

app.get('/campsite', function destination_index(req, res){
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
