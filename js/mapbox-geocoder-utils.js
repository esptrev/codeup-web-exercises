(function (){
    'use strict';
    
    const STARTING_COORDS = [-98.45, 29.74];
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    const mapToken = mapboxgl.accessToken
    
    
    // initializes map
    
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: STARTING_COORDS, // starting position [lng, lat]
        zoom: 8// starting zoom
    })
    let marker;
    $(document).ready(function(){

        marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat(STARTING_COORDS)
            .addTo(map);

        /*THE 'DRAGEND' IS FROM MAPBOX */
        marker.on('dragend', endOfMarkerDrag);
        














    }); /* END OF DOC READY FUNCTION DO NOT DELETE */
        
        /* DECLARE YOUR FUNCTIONS OUTSIDE OF DOC READY FUNCTION */
    
        function endOfMarkerDrag(){
            const coords = marker.getLngLat();
            console.log(coords);

            /* Calling popup function with end of marker drag */
            makePopUpForCoords(coords);
        }
        /* POPUP AND ATTACHMENT TO COORDS */
        
        function makePopUpForCoords(coords){
            /* coords from MAPBOX are an object, need to convert to array */
            const coordArray = [coords.lng, coords.lat];
            const popup = new mapboxgl.Popup({ closeOnClick: false })
                .setLngLat(coordArray)
                .setHTML(`${coordArray}`)
                // .addTo(map); /* dont need to add to map, adding to marker*/
            marker.setPopup(popup);
            popup.addTo(map);
        }
        









})();  /* END OF IIFE FUNCTION DO NOT DELETE */




//     map.addControl(
//         new MapboxGeocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl
//         })
//     );
//
//     // function geocode(search, token) {
//     //     var baseUrl = 'https://api.mapbox.com';
//     //     var endPoint = '/geocoding/v5/mapbox.places/';
//     //     $.ajax.get(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//     //         .done(function(data,status,jqXhr){
//     //             console.log(data);
//     //         })
//     // }
//     // return data.features[0].center
//     // function reverseGeocode(coordinates, token) {
//     //     var endPoint = '/geocoding/v5/mapbox.places/';
//     //     $.ajax.get(endPoint + coordinates.lng + ',' + coordinates.lat + '.json' + "?" + 'access_token=' + token,{
//     //     }).done(function(data,status,jqXhr){
//     //         console.log(data);
//     //     });
//     // }
//     function reverseGeocode(coordinates, token) {
//         var baseUrl = 'https://api.mapbox.com';
//         var endPoint = '/geocoding/v5/mapbox.places/';
//         return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//             .then(function(res) {
//                 return res.json();
//             })
//             // to get all the data from the request, comment out the following three lines...
//             .then(function(data) {
//                 return data.features[0].place_name;
//             });
//     }
//     reverseGeocode([39.73,-104.99], mapToken)
//
//
//
// //     // Create a new marker.
//     function placeMarker(){
//         const marker = new mapboxgl.Marker({
//             color: '#ff6600',
//             draggable: true
//
//         })
//             .setLngLat([-98.45, 29.74])
//             .addTo(map);
//         const lngLat = marker.getLngLat();
//         console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
//     }
//
//
// // //    Create a popup to go with marker above
//
//     function addPopUpToMarker(){
//         const popUp = new mapboxgl.Popup()
//             .setLngLat(lngLat)
//             .setHTML("<p>Spent more time than I can remember on the water here</p>")
//         marker.setPopup(popUp)
//     }
//
//
//


