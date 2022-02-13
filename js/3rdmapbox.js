(function(){
    'use strict';
    const STARTING_COORDS = [-98.45, 29.74];
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    // const mapToken = mapboxgl.accessToken
    const OPTIMAL_ZOOM_LEVEL = 15;

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: STARTING_COORDS,
        zoom: OPTIMAL_ZOOM_LEVEL
    })

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            zoom: OPTIMAL_ZOOM_LEVEL,
            placeholder: 'Search Box',
            mapboxgl: mapboxgl,
            marker: false,
        })
    );




    $(document).ready(function(){
        function onMoveEnd() {
            var coords = map.getCenter();
            marker.setLngLat(coords);
            moveMapToLocation(restaurant, true, true, centerMap, mapboxgl.accessToken);
        }

        map.on('moveend', onMoveEnd);


        function moveMapToLocation(search, addMarker, addPopup, centerMap, token) {
            var endPoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
            $.ajax(endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token, {
                type: "GET"
            }).done(function (data, status, jqXhr) {
                var latLng = data.features[0].center;
                if(centerMap) {
                    centerMapOnCoords(latLng);
                }
                var marker;
                if(addMarker) {
                    marker = new mapboxgl.Marker()
                        .setLngLat(data.features[0].center)
                        .addTo(map);
                }
                if(addPopup) {
                    var popup = new mapboxgl.Popup()
                        .setLngLat([-98.489615, 29.426827])
                        .setHTML(`<p>${search}</p>`);
                    if(addMarker) {
                        marker.setPopup(popup);
                    }
                }
            }).fail(function(jqXhr, status, error) {
                console.log("moveMapToLocation error: " + error);
            });
        }

        function centerMapOnCoords(latLng) {
            map.setCenter(latLng);
            map.setZoom(OPTIMAL_ZOOM_LEVEL);
        }













    });  /* END OF DOM READY FUNCTION DO NOT DELETE */






















})();  /* END OF IIFE DO NOT DELETE */