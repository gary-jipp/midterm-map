// Client facing scripts here

//the below is returning json data via console log to api/maps.js
//I think vasilly said $() was short for document ready....

//make a function called loadmap() , call in doc.ready()

$(() => {
  $('.new-map').on('click', showCreateMapForm);

  const container = $('#map-container');
  const map = new google.maps.Map(container, {center: {lat: 0, lng: 0}, zoom: 10});
  resetMap(map);

  loadSavedMaps();
});

const resetMap = function(map) {
  // const map = new google.maps.Map(container, {zoom: 5})

  //find current location
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const center = {lat: lat, lng: long};
    map.setCenter(center);
  });

  return map;
};

const showCreateMapForm = function() {
  // alert("showing the form")
  $('.create-map-form').removeClass("hidden");

};


const loadSavedMaps = function() {
  $.get("/api/maps")
    .then((data) => {
      renderSavedMaps(data);
    });
};

const renderSavedMaps = function(placeholder) {
  // Should be for map of maps here!!
  // Maps is an array!  saved maps
  let $aMap = createSavedMapElement(); //rename it to createMapElement()
  $(".saved-maps-container").append($aMap);
};

const createSavedMapElement = function() {
  const $aMap = $(`
  <div>
    This is a map div. Eventually a map will go here.
  </div>`);

  return $aMap;
};
