let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
    zoom: YOUR_ZOOM_LEVEL
  });
}
window.onload = initMap;
