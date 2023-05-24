// function to toggle data

function handleSwitch(filterVar) {
    const splitVar = filterVar.split('-');
    let variable2010 = splitVar[0];
    let variable2020 = splitVar[1];
    setToggle(variable2020);


    beforeMap.setPaintProperty("before", 'fill-color', [
        'step',
        ['to-number', ['get', variable2010]],
        '#FFEDA0',   // stop_output_0
        5,          // stop_input_0
        '#FED976',   // stop_output_1
        10,          // stop_input_1
        '#FEB24C',   // stop_output_2
        20,          // stop_input_2
        '#FD8D3C',   // stop_output_3
        40,         // stop_input_3
        '#FC4E2A',   // stop_output_4
        60,         // stop_input_4
        // '#E31A1C',   // stop_output_5
        // 2000,         // stop_input_5
        // '#BD0026',   // stop_output_6
        // 5000,        // stop_input_6
        "#800026"
    ]);

    afterMap.setPaintProperty("after", 'fill-color', [
        'step',
        ['to-number', ['get', variable2020]],
        '#FFEDA0',   // stop_output_0
        5,          // stop_input_0
        '#FED976',   // stop_output_1
        10,          // stop_input_1
        '#FEB24C',   // stop_output_2
        20,          // stop_input_2
        '#FD8D3C',   // stop_output_3
        40,         // stop_input_3
        '#FC4E2A',   // stop_output_4
        60,         // stop_input_4
        // '#E31A1C',   // stop_output_5
        // 2000,         // stop_input_5
        // '#BD0026',   // stop_output_6
        // 5000,        // stop_input_6
        "#800026"
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
        beforeMap.addSource('2010', {
        type: 'geojson',
        data: '../assets/2010displacementdata.geojson'
    });

    beforeMap.addLayer({
        'id': 'before',
        'type': 'fill',
        'source': '2010',
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
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }
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
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C',
        '#800026'
    ];
    
    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>Population of<br> demographic</b><br><b>()</b>";
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
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-121.78956760516976, 47.47222353691079],
        zoom: 9
    });

    afterMap.on('load', () => {
        afterMap.addSource('2020', {
        type: 'geojson',
        data: '../assets/2020displacementdata.geojson'
    });

    afterMap.addLayer({
        'id': 'after',
        'type': 'fill',
        'source': '2020',
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
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }
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
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C',
        '#800026'
    ];
    
    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>Population of<br> demographic</b><br><b>()</b>";
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
    // A selector or reference to HTML element
    const container = '#comparison-container';

    const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
    });


//testing the percentage change
// async function a() {
//     const a2020 = await fetch('assets/2020displacementdata.geojson');
//     const b = await a2020.json();
//     console.log(b)
//     // BLOCK_LBL2: "Block 1011"
//     // DECENNIALPL2020.P2-Data_NAME: "Block 1011, Block Group 1, Census Tract 108, King County, Washington"
//     const a2010 = await fetch('assets/2010displacementdata.geojson');
//     const c = await a2010.json();
//     console.log(c)
//     // Block 1000, Block Group 1, Census Tract 1, King County, Washington
//     let changeWhite = [];
//     let changeWhiteBlock = [];
//     for (let i = 0; i<b.features.length; i++) {
//         let x = b.features[i].properties.joinednewfinal_white_alone;
//         for (let j = 0; j < c.features.length; j++) {
//             // if (c.features[j].properties['cleaned2010race2_Label (Grouping)'] === b.features[i].properties.DECENNIALPL2020.P2-Data_NAME) {
//             //     
//             // }
//             console.log(c.features[j].properties['cleaned2010race2_Label (Grouping)'])
//         }
//         let y = c.features[5000].properties.cleaned2010race2_one_white_alone;
//         if (y > 0){
//             changeWhite.push(((x - y) / y) * 100);
//             changeWhiteBlock.push(b.features[i].geometry);
//         }
//     }
    
//     const features = changeWhiteBlock.map((geometry, index) => {
//         return {
//           type: "Feature",
//           geometry: geometry,
//           properties: {changeWhite: changeWhite[index]} // Add properties as needed
//         };
//       });

//     const newGeo = {
//     type: "FeatureCollection",
//     features: features
//     };

//     return newGeo
// }

// const afterMap = new mapboxgl.Map({
//     container: 'after',
//     style: 'mapbox://styles/mapbox/dark-v11',
//     center: [-122.3314, 47.5989],
//     zoom: 9
// });


// afterMap.on('load', async () => {
// afterMap.addSource('percentage', {
// type: 'geojson',
// data: await a()
// });

// afterMap.addLayer({
//     'id': 'after',
//     'type': 'fill',
//     'source': 'percentage',
//     'paint': {
//         'fill-color': [
//             'step',
//             ['coalesce', ['to-number', ['get', 'changeWhite']], 0],
//             '#FFEDA0',   // stop_output_0
//             -100,          // stop_input_0
//             '#FED976',   // stop_output_1
//             -65,          // stop_input_1
//             '#FEB24C',   // stop_output_2
//             -30,          // stop_input_2
//             '#FD8D3C',   // stop_output_3
//             0,
//             'blue',
//             5,         // stop_input_3
//             '#FC4E2A',   // stop_output_4
//             40,         // stop_input_4
//             '#E31A1C',   // stop_output_5
//             75,         // stop_input_5
//             '#BD0026',   // stop_output_6
//             100,        // stop_input_6
//             "#800026",
//             200,
//             'black'
//         ],
//         'fill-outline-color': '#BBBBBB',
//         'fill-opacity': 0.7,
// }
// });
// })