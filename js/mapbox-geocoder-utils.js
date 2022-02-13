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

    // function onMoveEnd() {
    //     var coords = map.getCenter();
    //     marker.setLngLat(coords);
    //     makePopUpForCoords(coords)
    // }

    // map.on('moveend', onMoveEnd);


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




        let myEats = [
            {
                name : 'Chipotle',
                address: '22106 U.S. Hwy 281 N, San Antonio, TX 78258',
                website: 'www.chipotle.com',
                position: [-98.45010, 29.64712]
            },
            {
                name: `Hon Machi Korean BBQ`,
                address: `19186 Blanco Rd, San Antonio, TX 78258`,
                website: `www.koreanbbqsa.com`,
                position: [-98.51231, 29.62114]


            },
            {
                name: `The Branch`,
                address: `17130 TX-46, Spring Branch, TX 78070`,
                website: `www.thebranchsbtx.com`,
                position: [-98.37938, 29.80446]
            }


        ]

        myEats.forEach(function (restaurant){
            geocode(restaurant.address, TREVORS_MAP_TOKEN);

        })


    }); /* END OF DOC READY FUNCTION DO NOT DELETE */

    /* DECLARE YOUR FUNCTIONS OUTSIDE OF DOC READY FUNCTION */

    function createMarker(longLat,popInfo){
        return new mapboxgl.Marker({
            draggable: true
        }).setLngLat(longLat)
            .addTo(map)
            .setPopup(createPopUp(popInfo))
    }


    function createPopUp(popInfo){
        const popup = new mapboxgl.Popup({closeOnClick: false})
            .setHTML(popInfo)
    }


    // function endOfMarkerDrag() {
    //     const coords = marker.getLngLat();
    //     console.log(coords);
    //     map.setCenter([coords.lng, coords.lat]);
    //     /* Calling popup function with end of marker drag */
    //     makePopUpForCoords(coords);
    // }

    /* POPUP AND ATTACHMENT TO COORDS */

    function makePopUpForCoords(coords) {
        /* coords from MAPBOX are an object, need to convert to array */
        const coordArray = [coords.lng, coords.lat];

        reverseGeocode(coords,TREVORS_MAP_TOKEN).then(function (result){
            console.log(result);

            // .addTo(map); /* dont need to add to map, adding to marker*/
            marker.setPopup(popup);
            popup.addTo(map);
        })

        doForecastingStuffForCoords(coordArray);
    }

    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                console.log(data.features[0]);
                createMarker(data.features[0].center);
                /*THE 'DRAGEND' IS FROM MAPBOX */
            // .on('dragend', endOfMarkerDrag)
            });
    }
    // geocode(`san antonio,tx`, TREVORS_MAP_TOKEN)
    //     .then(function (data){
    //         console.log(data);
    //     })


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
//     //
//     // return data.features[0].center
//     // function reverseGeocode(coordinates, token) {
//     //     var endPoint = '/geocoding/v5/mapbox.places/';
//     //     $.ajax.get(endPoint + coordinates.lng + ',' + coordinates.lat + '.json' + "?" + 'access_token=' + token,{
//     //     }).done(function(data,status,jqXhr){
//     //         console.log(data);
//     //     });
//     // }
//
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


