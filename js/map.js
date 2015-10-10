
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 19.459574, lng: -99.1956487}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var centros = [
  ['Seven', 19.4288125,-99.1974185, 7],
  ['Startup México', 19.4603772,-99.2073749, 4],
  ['The Pool', 19.4305339,-99.200993, 6],
  ['INADEM', 19.3526377,-99.1855311, 5],
  ['Impact Hub', 19.417457,-99.1622748, 3],
  ['Tecnológico de Monterrey, Campus Santa Fé', 19.3593887,-99.2604589, 2],
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1],
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]
  ['Town Center, El Rosario', 19.5031573,-99.2034047, 1]

];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'imagenes/bike.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 50)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < bikes.length; i++) {
    var centros = bikes[i];
    var marker = new google.maps.Marker({
      position: {lat: centros[1], lng: centros[2]},
      map: map,
      icon: image,
      shape: shape,
      title: centros[0],
      zIndex: centros[3]
    });
  }
}
