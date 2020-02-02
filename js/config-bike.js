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
                center: [-122.316768,47.612842],
                zoom: 12,
                pitch: 40.00,
                bearing: 30.00
            },
            onChapterEnter: [
                {
                    layer: 'rainbow-crosswalk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rainbow-crosswalk',
                    opacity: 0
                }
            ]
        },
        {
            id: 'march-route',
            title: 'Prides in Seattle',
            image: '',
            description: 'Each year, Seattle Pride awards grants to charitable organizations that support the local LGBTQ+ community. In 2019, there are Trans Pride, Wildrose Pride, Queer/Bar Pride, Capital Hill Pride, Seattle Dyke March, Seattle Pride Parade.',
            location: {
                center: [-122.322615,47.613533],
                zoom: 14,
                pitch: 20,
                bearing: 20.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'phl-bike-network',
                  opacity: 0
              }
            ]
        },
        {
            id: 'indego',
            title: 'Indego Bike Share',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [-75.16468, 39.94503],
                zoom: 13.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'march-route',
                    opacity: 0.8
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
            id: 'belmont',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [-75.20325, 39.99574],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
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
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
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
