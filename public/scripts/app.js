console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $.get('/api/campsite', function(destination){
    destinations.forEach(function(destination){
      renderDestination(destination);
    })
  })
});

function renderDestination(destination){
  var destinationPush = $('');

  var destinationHTML =
  
}
