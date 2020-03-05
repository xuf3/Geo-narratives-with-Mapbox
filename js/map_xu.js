mapboxgl.accessToken = 'pk.eyJ1IjoieHVmMyIsImEiOiJjazUzZTQ0bWEwN3BjM2xtYzAxd2NvcXJ3In0.Fyg85XmzmWQs_nLgf7DXdg';
//'light-v10','dark-v10'.'outdoors-v11','satellite-v9','streets-v11'
var map_style = 'satellite-v9';

var map = new mapboxgl.Map({
  container: 'map',
  zoom: 9,
  pitch: 60,
  bearing: 40,
  center: [137.9150899566626, 36.25956997955441],
  style: 'mapbox://styles/mapbox/' + map_style
});

function addlayer(feature){
  map.addSource(feature.addGeo[0].id, feature.addGeo[0].source);
  map.addLayer(cfeature.addGeo[0].layer);
}

var scroller = scrollama();

map.on("load", function() {
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        //map.setStyle(config.style);
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.addlayer.length > 0) {
            chapter.addlayer.forEach(addlayer);
            //chapter.addGeo.forEach(setLayerOpacity);
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
        if (chapter.removeGeo.length > 0) {
            map.removeLayer(chapter.removeGeo[0].layer);
            //map.removeLayer(chapter.removeGeo[0].id);
        }
        if (chapter.removeRaster.length > 0) {
          map.removeLayer(chapter.removeRaster[0].layer);
            //map.removeLayer(chapter.removeGeo[0].layer);
        }
    });
});
