
function add(layer){
  console.log(layer);
  map.addSource(layer.id, layer.source);
  map.addLayer(layer.layer);
}

map.on("load", function() {
  maplayers.forEach(add);
})

function removelayer(layer){
  //map.setPaintProperty(layer.id, map.getLayer(layer.id).type, 0);
  map.setPaintProperty(layer.id, map.getLayer(layer.id).type + '-opacity', 0);
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
        var chapter = chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        if(chapter.style){
          map.setStyle('mapbox://styles/mapbox/' + chapter.changestyle);
        }
        if (chapter.show > 0) {
            chapter.show.forEach(showlayer);
        }
    })
    .onStepExit(response => {
        var chapter = chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.hide.length > 0) {
            chapter.hide.forEach(removelayer);
        }
    });
});
