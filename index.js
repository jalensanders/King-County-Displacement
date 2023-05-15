mapboxgl.accessToken =
    'pk.eyJ1IjoiZGltZW50aW8iLCJhIjoiY2xhMngzZmEyMDRtdDN2bW93MjYyY2hvbSJ9.lBP2u-C8BEgug7_ye16y2g';

let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: [-122.3314, 47.5989], // starting position [lng, lat]
    zoom: 8, // starting zoom
    projection: 'mercator'
});

map.on('load', () => {
    map.addSource('2010', {
        type: 'geojson',
        data: 'assets/2010joinedfinal.geojson'
    });

    map.addLayer({
        'id': 'map',
        'type': 'fill',
        'source': '2010',
        'paint': {
            'fill-color': [
                'step',
                ['coalesce', ['to-number', ['get', 'cleaned2010race2_one_white_alone']], 0],
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
            ],
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }
    });

    const layers = [
        '0-4',
        '5-9',
        '10-19',
        '20-39',
        '40-59',
        '60+'
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