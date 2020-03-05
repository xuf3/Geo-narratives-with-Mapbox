var stories = [
  {
    id: 'crosswalk',
    theme: 'light',
    position: 'righty',
    title: 'Rainbow Crosswalks in Seattle',
    image: '',
    video: 'https://www.youtube.com/embed/TrGI9Yki-24',
    description: 'In honor of LGBTQ pride, Capitol Hill will be sporting some brand-new rainbow-colored crosswalks. The pedestrian crossings, located east of Broadway on 10th and 11th Avenues, are expected to last for three to five years. The costs, roughly $6,000 each, are being covered by Capitol Hill developers. Mayor Ed Murray unveiled the crosswalks on Tuesday, remarking that "it says something about this neighborhood and it also says something about Seattle. This is a city of very diverse neighborhoods throughout with different character.',
    changestyle: 'dark-v10'
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

var chapters = [
  {
    id: 'crosswalk',
    location: {
      // longitude, lantitude
        center: [-122.319,47.614],
        zoom: 17,
        pitch: 40.00,
        bearing: 30.00
    },
    //style: '',
    layer: [
      {
        id : 'maine',
        source: {'type': 'geojson','data': {'type': 'Feature','geometry': {'type': 'Polygon',
        'coordinates': [[[-122.320964, 47.614164],[-122.320649, 47.614182],[-122.320617, 47.613981],[-122.320974, 47.613974]]]}}},
        layer: {'id': 'maine','type': 'fill','source': 'maine','layout': {},'paint': {'fill-color': '#088','fill-opacity': 0.8}},
      }
    ]
  },
  {
    id: 'march',
    location: {
        center: [-122.322615,47.613533],
        zoom: 14,
        pitch: 20,
        bearing: 20.00
    },
    layer: [
      {
        id : 'maine',
        source: {'type': 'geojson','data': {'type': 'Feature','geometry': {'type': 'Polygon',
        'coordinates': [[[-122.322964, 47.614164],[-122.322649, 47.614182],[-122.320617, 45.613981],[-122.320974, 47.613974]]]}}},
        layer: {'id': 'maine','type': 'fill','source': 'maine','layout': {},'paint': {'fill-color': '#088','fill-opacity': 0.8}},
      }
    ]
  }
]

stories.forEach(function(content,index){
  var menu = document.getElementById("features")
  var story = document.createElement('div');
  story.setAttribute("id",content.id);
  story.setAttribute("class",content.position + " " + content.theme + " step");
  story.setAttribute("data-scrollama-index", index);

  if(content.title){
    var title = document.createElement('h3');
    title.innerHTML = content.title;
    story.appendChild(title);
  }

  if(content.image){
    var image = document.createElement('img');
    image.src = content.image;
    story.appendChild(image);
  }

  if(content.video){
    var video = document.createElement('iframe');
    video.src = content.video;
    video.height = "300";
    story.appendChild(video);
  }

  if(content.description){
    var description = document.createElement('p');
    description.innerHTML = content.description;
    story.appendChild(description);
  }

  if(index === 0){
    story.className += " " + "active";
  }

  menu.appendChild(story);
})
