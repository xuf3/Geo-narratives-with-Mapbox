mapboxgl.accessToken = 'pk.eyJ1IjoieHVmMyIsImEiOiJjazUzZTQ0bWEwN3BjM2xtYzAxd2NvcXJ3In0.Fyg85XmzmWQs_nLgf7DXdg';
//'light-v10','dark-v10'.'outdoors-v11','satellite-v9'
var map_style = 'streets-v11';

var map = new mapboxgl.Map({
  container: 'map',
  zoom: 9,
  center: [137.9150899566626, 36.25956997955441],
  style: 'mapbox://styles/mapbox/' + map_style
});
