mapboxgl.accessToken = 'pk.eyJ1IjoieHVmMyIsImEiOiJjazUzZTQ0bWEwN3BjM2xtYzAxd2NvcXJ3In0.Fyg85XmzmWQs_nLgf7DXdg';
//'light-v10','dark-v10'.'outdoors-v11','satellite-v9'
var map_style = 'streets-v11';

var map = new mapboxgl.Map({
  container: 'map',
  zoom: 9,
  center: [137.9150899566626, 36.25956997955441],
  style: 'mapbox://styles/mapbox/' + map_style
});

var chapters = [
  {
    id: 'crosswalk',
    theme: 'light',
    position: 'lefty',
    title: 'Rainbow Crosswalks in Seattle',
    image: 'https://cdn.vox-cdn.com/thumbor/j0qWyhnj8qrv1uuhosUfcnhqpBQ=/0x0:500x375/920x613/filters:focal(0x0:500x375)/cdn.vox-cdn.com/uploads/chorus_image/image/46614402/18896843740_4b9955586e_z-3.0.0.jpg',
    video: 'https://www.youtube.com/embed/TrGI9Yki-24',
    description: 'In honor of LGBTQ pride, Capitol Hill will be sporting some brand-new rainbow-colored crosswalks. The pedestrian crossings, located east of Broadway on 10th and 11th Avenues, are expected to last for three to five years. The costs, roughly $6,000 each, are being covered by Capitol Hill developers. Mayor Ed Murray unveiled the crosswalks on Tuesday, remarking that "it says something about this neighborhood and it also says something about Seattle. This is a city of very diverse neighborhoods throughout with different character.'
  },
  {
    id: 'march',
    theme: 'light',
    title: 'Prides in Seattle',
    position: 'righty',
    image: 'https://storage.googleapis.com/afs-prod/media/media:5de9a7dded6a48ebbe1d3c7ec3583aaf/800.jpeg',
    description: 'Each year, Seattle Pride awards grants to charitable organizations that support the local LGBTQ+ community. In 2019, there are Trans Pride, Wildrose Pride, Queer/Bar Pride, Capital Hill Pride, Seattle Dyke March, Seattle Pride Parade.'
  },
  {
    id: 'church',
    theme: 'dark',
    position: 'righty',
    title: 'LGTBQ Friendly Church in Seattle',
    image: 'https://static.seattletimes.com/wp-content/uploads/2020/01/01032020_methodist-pic_091309-1560x1040.jpg',
    description: 'As a LGBTQ friendly city, there are many facilities that are welcome to LGBTQ people, not only the restaurant, bars, but also the churches.'
  }
]

chapters.forEach(function(content,index){
  var menu = document.getElementById("features")
  var chapter = document.createElement('div');
  chapter.setAttribute("id",content.id);
  chapter.setAttribute("class",content.position + " " + content.theme + " step");
  chapter.setAttribute("data-scrollama-index", index);

  if(content.title){
    var title = document.createElement('h3');
    title.innerHTML = content.title;
    chapter.appendChild(title);
  }

  if(content.image){
    var image = document.createElement('img');
    image.src = content.image;
    chapter.appendChild(image);
  }

  if(content.video){
    var video = document.createElement('iframe');
    video.src = content.video;
    video.height = "400";
    chapter.appendChild(video);
  }

  if(content.description){
    var description = document.createElement('p');
    description.innerHTML = content.description;
    chapter.appendChild(description);
  }

  if(index === 0){
    chapter.className += " " + "active";
  }

  menu.appendChild(chapter);
})
