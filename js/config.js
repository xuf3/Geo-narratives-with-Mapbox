var config = {
    //style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
    style: 'mapbox://styles/xuf3/ck53f3ukg0sjy1csd5vzb3niq',
    //accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    accessToken: 'pk.eyJ1IjoieHVmMyIsImEiOiJjazUzZTQ0bWEwN3BjM2xtYzAxd2NvcXJ3In0.Fyg85XmzmWQs_nLgf7DXdg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'seattle',
            title: 'Rainbow Crosswalks in Seattle',
            image: 'https://cdn.vox-cdn.com/thumbor/j0qWyhnj8qrv1uuhosUfcnhqpBQ=/0x0:500x375/920x613/filters:focal(0x0:500x375)/cdn.vox-cdn.com/uploads/chorus_image/image/46614402/18896843740_4b9955586e_z-3.0.0.jpg',
            description: 'In honor of LGBTQ pride, Capitol Hill will be sporting some brand-new rainbow-colored crosswalks. The pedestrian crossings, located east of Broadway on 10th and 11th Avenues, are expected to last for three to five years. The costs, roughly $6,000 each, are being covered by Capitol Hill developers. Mayor Ed Murray unveiled the crosswalks on Tuesday, remarking that "it says something about this neighborhood and it also says something about Seattle. This is a city of very diverse neighborhoods throughout with different character.',
            location: {
              // longitude, lantitude
                center: [-122.319,47.614],
                zoom: 17,
                pitch: 40.00,
                bearing: 30.00
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                }
            ],
            addGeo:[
              {
                id : 'maine',
                source: {'type': 'geojson','data': {'type': 'Feature','geometry': {'type': 'Polygon',
                'coordinates': [[[-122.320964, 47.614164],[-122.320649, 47.614182],[-122.320617, 47.613981],[-122.320974, 47.613974]]]}}},
                layer: {'id': 'maine','type': 'fill','source': 'maine','layout': {},'paint': {'fill-color': '#088','fill-opacity': 0.8}},
              }
            ],
            removeGeo: [
                {
                    layer: 'maine',
                }
            ],
            addRaster: [
              {
                id : 'raster-tiles',
                source: {
                    'type': 'raster',
                    'tiles': [
                      'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
                    ],
                  },
                layer: {'id': 'simple-tiles',
                'type': 'raster',
                'source': 'raster-tiles',
                'opacity' : 0.3,
              }
                }
          ],
          removeRaster: [
              {
                  layer: 'raster-tiles',
              }
          ]
        },
        {
            id: 'march-route',
            style: 'mapbox://styles/xuf3/ck53f3ukg0sjy1csd5vzb3niq',
            title: 'Prides in Seattle',
            image: 'https://storage.googleapis.com/afs-prod/media/media:5de9a7dded6a48ebbe1d3c7ec3583aaf/800.jpeg',
            description: 'Each year, Seattle Pride awards grants to charitable organizations that support the local LGBTQ+ community. In 2019, there are Trans Pride, Wildrose Pride, Queer/Bar Pride, Capital Hill Pride, Seattle Dyke March, Seattle Pride Parade.',
            location: {
                center: [-122.322615,47.613533],
                zoom: 14,
                pitch: 20,
                bearing: 20.00
            },
            onChapterEnter: [
                {
                    layer: 'march-route',
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'march-route',
                  opacity: 0
              }
            ]
        },
        {
            id: 'lgbtq-friendly-church',
            title: 'LGTBQ Friendly Church in Seattle',
            image: 'https://static.seattletimes.com/wp-content/uploads/2020/01/01032020_methodist-pic_091309-1560x1040.jpg',
            description: 'As a LGBTQ friendly city, there are many facilities that are welcome to LGBTQ people, not only the restaurant, bars, but also the churches.',
            location: {
                center: [-122.294580, 47.633218],
                zoom: 13.00,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'lgbtq-friendly-church (1)',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'lgbtq-friendly-church (1)',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            title: 'Seattle Gay Bars in Capitol Hill',
            image: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3648,w_5472,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/QB4_pdqnzd.jpg',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [-122.314,47.614],
                zoom: 17,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'gay-city',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gay-city',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            title: 'Wissahickon Park Trails',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [-75.21223, 40.05028],
                zoom: 5,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1,
                    id: 'maine'
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ],
            addGeo:[
                {
                  id: 'maine',
                  layer: {'id': 'maine','type': 'fill','source': 'maine','layout': {},'paint': {'fill-color': '#088','fill-opacity': 0.8}}
              }
            ]
        },
        {
            id: 'pennypack',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provces a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [-75.05685, 40.06839],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
