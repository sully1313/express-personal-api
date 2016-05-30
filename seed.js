//This file allows us to seed our application with data
//simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var destinationsList = [
  {
    country: 'https://www.google.com/maps/place/Canada/@35.1453591,-157.6503695,3z/data=!3m1!4b1!4m5!3m4!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!8m2!3d56.130366!4d-106.346771',
    city: 'http://postmediavancouversun.files.wordpress.com/2011/08/vancouver1.jpg',
    season: 'Summer'
  },
  {
    country: 'https://www.google.com/maps/place/St+Kitts/data=!4m2!3m1!1s0x8c121c7cbb89c1b3:0xddc8340c0ae20e02?sa=X&ved=0ahUKEwiZioulwILNAhUKS2MKHS8-Dy0Q8gEIkAEwDw',
    city: 'http://skncoc.org/wp-content/uploads/2015/03/beach-st-kitts.jpg',
    season: 'Fall'
  },
  {
    country: 'https://www.google.com/maps/place/United+States/@31.7860603,-132.0853276,3z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891',
    city: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178286/Miami-21371.jpg',
  },
];

db.Campsite.remove({}, function(err, destinations){

db.Campsite.create(destinationsList, function(err, destinations){
  if (err){ return console.log("Error:", err);}

  console.log("All destinations:", destinations);
  console.log("created", destinations.length);
  process.exit(); // we're all done! Exit the program.
});
});
