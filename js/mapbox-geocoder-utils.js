(function (){
    'use strict';



    // initializes map
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    const mapToken = mapboxgl.accessToken
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.45, 29.74], // starting position [lng, lat]
        zoom: 8// starting zoom
    })
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }


    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function(data) {
                return data.features[0].place_name;
            });
    }
    reverseGeocode({lat: 32.716, lng: 117.161})



//     // Create a new marker.
    function placeMarker(){
        const marker = new mapboxgl.Marker({
            color: '#ff6600',
            draggable: true

        })
            .setLngLat([-98.45, 29.74])
            .addTo(map);
        const lngLat = marker.getLngLat();
        console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);


    }


// //    Create a popup to go with marker above

    function addPopUpToMarker(){
        const popUp = new mapboxgl.Popup()
            .setLngLat(lngLat)
            .setHTML("<p>Spent more time than I can remember on the water here</p>")
        marker.setPopup(popUp)
    }




})();







