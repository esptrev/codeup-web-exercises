(function () {
    'use strict';

    const STARTING_COORDS = [-98.45, 29.74];
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    // const mapToken = mapboxgl.accessToken
    const OPTIMAL_ZOOM_LEVEL = 15;

    // initializes map

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: STARTING_COORDS,
        zoom: OPTIMAL_ZOOM_LEVEL
    })
    let marker;

    function onMoveEnd() {
        var coords = map.getCenter();
        marker.setLngLat(coords);
        makePopUpForCoords(coords)
    }

    map.on('moveend', onMoveEnd);


    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            zoom: OPTIMAL_ZOOM_LEVEL,
            placeholder: 'Search Box',
            mapboxgl: mapboxgl,
            marker: false,
        })
    );


    $(document).ready(function () {

        marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat(STARTING_COORDS)
            .addTo(map);

        /*THE 'DRAGEND' IS FROM MAPBOX */
        marker.on('dragend', endOfMarkerDrag);


    }); /* END OF DOC READY FUNCTION DO NOT DELETE */

    /* DECLARE YOUR FUNCTIONS OUTSIDE OF DOC READY FUNCTION */

    function endOfMarkerDrag() {
        const coords = marker.getLngLat();
        console.log(results);

        /* Calling popup function with end of marker drag */
        makePopUpForCoords(coords);
    }

    /* POPUP AND ATTACHMENT TO COORDS */

    function makePopUpForCoords(coords) {
        /* coords from MAPBOX are an object, need to convert to array */
        const coordArray = [coords.lng, coords.lat];
        const popup = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(coordArray)
            .setHTML(`${coordArray}`)
        // .addTo(map); /* dont need to add to map, adding to marker*/
        marker.setPopup(popup);
        popup.addTo(map);
        doForecastingStuffForCoords(coordArray);
    }


    function doForecastingStuffForCoords(coords) {
        var lng = coords[0];
        var lat = coords[1];
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${TREVORS_WEATHER_MAP_KEY}&units=imperial`)
            .done(function (data) {
                console.log(data);

                let todaysHiTemp = data.daily[0].temp.max;
                let tomorrowsHiTemp = data.daily[1].temp.max;
                var html = `
<div class="col-12">
        <p>Todays High ${todaysHiTemp}</p>
        <p>Fridays High ${tomorrowsHiTemp}</p>
</div>
`;
                $('#forecastDiv').html(html);

            });


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


