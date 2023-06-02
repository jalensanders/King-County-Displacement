// function to toggle data

function handleSwitch(filterVar) {
    const splitVar = filterVar.split('-');
    let variable2010 = splitVar[0];
    let variable2020 = splitVar[1];
    let variablePercent = splitVar[2];
    console.log(variablePercent);

    const races = ['White', 'Black', 'Asian', 'Hispanic', 'Native', 'Hawaiian/PI'];
    if (variable2020 === 'joinednewfinal_white_alone') {
        setToggle(races[0]);
    } else if (variable2020 === 'joinednewfinal_black_or_aa_alone') {
        setToggle(races[1]);
    } else if (variable2020 === 'joinednewfinal_asian_alone') {
        setToggle(races[2]);
    } else if (variable2020 === 'hispanic_P2_002N') {
        setToggle(races[3]);
    } else if (variable2020 === 'joinednewfinal_amerind_or_alaskanative_alone') {
        setToggle(races[4]);
    } else if (variable2020 === 'joinednewfinal_native_hawaiian_pacific_islander_alone') {
        setToggle(races[5]);
    };    

    const layerID2020 = ['after1', 'after2', 'after3'];
    const layerID2010 = ['before1', 'before2', 'before3', 'before4', 'before5', 'before6', 'before7', 'before8', 'before9', 'before10'];

    layerID2010.forEach((layerID) => {
        beforeMap.setPaintProperty(layerID, 'fill-color', [
        'step',
        ['to-number', ['get', variable2010]],
            '#FFEDA0',   // stop_output_0
            20,          // stop_input_0
            '#FED976',   // stop_output_1
            40,          // stop_input_1
            '#FEB24C',   // stop_output_2
            80,          // stop_input_2
            '#FD8D3C',   // stop_output_3
            160,         // stop_input_3
            '#FC4E2A',   // stop_output_4
            320,         // stop_input_4
            // '#E31A1C',   // stop_output_5
            // 2000,         // stop_input_5
            // '#BD0026',   // stop_output_6
            // 5000,        // stop_input_6
            "#800026"
        ]);
    })

    layerID2020.forEach((layerID) => {
        afterMap.setPaintProperty(layerID, 'fill-color', [
        'step',
        ['to-number', ['get', variable2020]],
            '#FFEDA0',   // stop_output_0
            20,          // stop_input_0
            '#FED976',   // stop_output_1
            40,          // stop_input_1
            '#FEB24C',   // stop_output_2
            80,          // stop_input_2
            '#FD8D3C',   // stop_output_3
            160,         // stop_input_3
            '#FC4E2A',   // stop_output_4
            320,         // stop_input_4
            // '#E31A1C',   // stop_output_5
            // 2000,         // stop_input_5
            // '#BD0026',   // stop_output_6
            // 5000,        // stop_input_6
            "#800026"
        ]);
    })

    perMap.setPaintProperty("per_change_layer", 'fill-color', [
        'step',
        ['to-number', ['get', variablePercent]],
        '#FFEDA0',   // stop_output_0
        -75,        // stop_input_0
        '#FED976',   // stop_output_1
        -50,         // stop_input_1
        '#FEB24C',   // stop_output_2
        -25,         // stop_input_2
        '#FD8D3C',   // stop_output_3
        0,         // stop_input_3
        '#000000',
        0.000001,
        '#FC4E2A',   // stop_output_4
        25,           // stop_input_4
        '#E31A1C',   // stop_output_5
        50,          // stop_input_5
        '#BD0026',   // stop_output_6
        75,          // stop_input_6
        "#800026"    // stop_output_7
    ]);    
    
};

function setToggle(variable) {
    const toggle =  document.getElementById('currentToggle');
    toggle.innerText = 'Toggle: ' + variable;
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZGltZW50aW8iLCJhIjoiY2xhMngzZmEyMDRtdDN2bW93MjYyY2hvbSJ9.lBP2u-C8BEgug7_ye16y2g';
    const beforeMap = new mapboxgl.Map({
        container: 'before',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-121.78956760516976, 47.47222353691079],
        zoom: 9
    });


    beforeMap.on('load', () => {
        beforeMap.addSource('2010_1', {
        type: 'geojson',
        data: 'assets/output2010_1.geojson'
        },
        beforeMap.addSource('2010_2', {
            type: 'geojson',
            data: 'assets/output2010_2.geojson'
        },
        beforeMap.addSource('2010_3', {
            type: 'geojson',
            data: 'assets/output2010_3.geojson'
        },
        beforeMap.addSource('2010_4', {
            type: 'geojson',
            data: 'assets/output2010_4.geojson'
        },
        beforeMap.addSource('2010_5', {
            type: 'geojson',
            data: 'assets/output2010_5.geojson'
        },
        beforeMap.addSource('2010_6', {
            type: 'geojson',
            data: 'assets/output2010_6.geojson'
        },
        beforeMap.addSource('2010_7', {
            type: 'geojson',
            data: 'assets/output2010_7.geojson'
        },
        beforeMap.addSource('2010_8', {
            type: 'geojson',
            data: 'assets/output2010_8.geojson'
        },
        beforeMap.addSource('2010_9', {
            type: 'geojson',
            data: 'assets/output2010_9.geojson'
        },
        beforeMap.addSource('2010_10', {
            type: 'geojson',
            data: 'assets/output2010_10.geojson'
        }
        ))))))))));

    const layers2010 = [
        {
            'id': 'before1',
            'type': 'fill',
            'source': '2010_1',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before2',
            'type': 'fill',
            'source': '2010_2',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before3',
            'type': 'fill',
            'source': '2010_3',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before4',
            'type': 'fill',
            'source': '2010_4',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before5',
            'type': 'fill',
            'source': '2010_5',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before6',
            'type': 'fill',
            'source': '2010_6',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before7',
            'type': 'fill',
            'source': '2010_7',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before8',
            'type': 'fill',
            'source': '2010_8',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before9',
            'type': 'fill',
            'source': '2010_9',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'before10',
            'type': 'fill',
            'source': '2010_10',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'cleaned2010race2_Total:']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        }
    ]
    
    layers2010.forEach(layer => {
        beforeMap.addLayer(layer);
      });

    const layers = [
        '0-20',
        '21-40',
        '41-80',
        '81-160',
        '161-320',
        '320+'
    ];
    const colors = [
        '#FFEDA0',
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#800026'
    ];
    
    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>Race Population<br></b><br><b></b>";
    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
    
        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    });
})


    const afterMap = new mapboxgl.Map({
        container: 'after',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-121.78956760516976, 47.47222353691079],
        zoom: 9
    });

    afterMap.on('load', () => {
        afterMap.addSource('2020_1', {
        type: 'geojson',
        data: 'assets/output2020_1.geojson'
    },
    afterMap.addSource('2020_2', {
        type: 'geojson',
        data: 'assets/output2020_2.geojson'
    },
    afterMap.addSource('2020_3', {
        type: 'geojson',
        data: 'assets/output2020_3.geojson'
    }
    )));

    const layers2020 = [
        {
            'id': 'after1',
            'type': 'fill',
            'source': '2020_1',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'joinednewfinal_total']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'after2',
            'type': 'fill',
            'source': '2020_2',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'joinednewfinal_total']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        },
        {
            'id': 'after3',
            'type': 'fill',
            'source': '2020_3',
            'paint': {
                'fill-color': [
                    'step',
                    ['coalesce', ['to-number', ['get', 'joinednewfinal_total']], 0],
                    '#FFEDA0',   // stop_output_0
                    20,          // stop_input_0
                    '#FED976',   // stop_output_1
                    40,          // stop_input_1
                    '#FEB24C',   // stop_output_2
                    80,          // stop_input_2
                    '#FD8D3C',   // stop_output_3
                    160,         // stop_input_3
                    '#FC4E2A',   // stop_output_4
                    320,         // stop_input_4
                    // '#E31A1C',   // stop_output_5
                    // 2000,         // stop_input_5
                    // '#BD0026',   // stop_output_6
                    // 5000,        // stop_input_6
                    "#800026"
                ],
                'fill-opacity': 0.7,
            }
        }
    ]

    layers2020.forEach(layer => {
        afterMap.addLayer(layer);
      });

})
    // A selector or reference to HTML element
    const container = '#comparison-container';

    const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
    });


    // percentage change map
    const perMap = new mapboxgl.Map({
        container: 'per_change',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-121.78956760516976, 47.47222353691079],
        zoom: 9
    });

    perMap.on('load', () => {
        perMap.addSource('percent_change', {
        type: 'geojson',
        data: 'assets/per_change.geojson'
        })

        perMap.addLayer({
            'id': 'per_change_layer',
            'type': 'fill',
            'source': 'percent_change',
            'paint': {
              'fill-color': [
                'step',
                ['coalesce', ['to-number', ['get', 'per_total']], 0], // cast Pop2010 to a number
                '#FFEDA0',   // stop_output_0
                -75,        // stop_input_0
                '#FED976',   // stop_output_1
                -50,         // stop_input_1
                '#FEB24C',   // stop_output_2
                -25,         // stop_input_2
                '#FD8D3C',   // stop_output_3
                0,         // stop_input_3
                '#f0f0f5',
                0.000001,
                '#FC4E2A',   // stop_output_4
                25,           // stop_input_4
                '#E31A1C',   // stop_output_5
                50,          // stop_input_5
                '#BD0026',   // stop_output_6
                75,          // stop_input_6
                "#800026"    // stop_output_7
              ],
              'fill-opacity': 0.7
            }
          });
          
          
        const layers2 = [
            '-100 to -76',
            '-75 to -51',
            '-50 to -26',
            '-25 to -0.01',
            '0',
            '0.01 to 24',
            '25 to 49', 
            '50 to 74',
            '75 or above'
        ];
        const colors2 = [
            '#FFEDA0',
            '#FED976',
            '#FEB24C',
            '#FD8D3C',
            '#f0f0f5',
            '#FC4E2A',
            '#E31A1C',
            '#BD0026',
            '#800026',
        ];

        const legend2 = document.getElementById('legend2');
        legend2.innerHTML = "<b>Approximate Percent Change<br><b>(%)</b>";
        layers2.forEach((layer, i) => {
            const color = colors2[i];
            const item = document.createElement('div');
            const key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;
        
            const value = document.createElement('span');
            value.innerHTML = `${layer}`;
            item.appendChild(key);
            item.appendChild(value);
            legend2.appendChild(item);
        });
    });


    