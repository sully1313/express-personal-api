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
  var destinationPush = $('#json');

  var destinationHTML =

  "        <!-- one destination -->" +
  "        <div class='row album' data-album-id='" + "HARDCODED Each Destination" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin destination internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + destination.city +  " alt='city image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Country:</h4>" +
  "                        <span class='album-name'>" +  destination.country + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>City:</h4>" +
  "                        <img src="+  destination.city + "'>" "</img>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Season:</h4>" +
  "                        <span class='album-releaseDate'>" + destination.season + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";
  destinationPush.append(destinationHTML);
};
