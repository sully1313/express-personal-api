console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $.get('/api/campsite', function(destinations){
    destinations.forEach(function(destination){
      renderDestination(destination);
    })
  })
});

function renderDestination(destination){
  console.log('rendering destination:', destination);
  var source = $('#entry-template2').html();
  var template = Handlebars.compile(source);
};

$(document).ready(function(){
  $.get('/api/campsite', function(profile){
    renderProfile(profile);
  })
})

function renderProfile(profile){
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
}
