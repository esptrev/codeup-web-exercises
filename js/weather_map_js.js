(function(){
    'use strict';
    const OPEN_WEATHER_APPID = TREVORS_WEATHER_MAP_KEY;
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    const OPTIMAL_ZOOM_LEVEL = 12;
    const STARTING_COORDS = [-98.45, 29.74];

    const map = new mapboxgl.Map({
        container: 'mapDiv', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-98.4861, 29.4260], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });

    let marker = '';  /* declaring marker variable so i can use it */

    function onMoveEnd() {
        var coords = map.getCenter();
        marker.setLngLat(coords);
        makePopUpForCoords(coords)
        console.log(coords);
    }
    map.on('moveend', onMoveEnd);

    /* adding geocontrol box */

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            zoom: OPTIMAL_ZOOM_LEVEL,
            placeholder: 'Search Box',
            mapboxgl: mapboxgl,
            marker: false,
        })

    );
    marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat(STARTING_COORDS)
        .addTo(map);

    /*THE 'DRAGEND' IS FROM MAPBOX */
    marker.on('dragend', endOfMarkerDrag);

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
        // doForecastingStuffForCoords(coordArray);
    }





    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat:    32.7157,  /* i want coords to feed from map center */
        lon:   -117.1611,
        units: "imperial"
    }).done(onSuccessfulLoad)

    


    function onSuccessfulLoad(data) {
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);

        let dayOfWeek = data.current.dt;  /* need to convert */
        $('#dayOfWeek').html(`${dayOfWeek}`);

        let highTemp = data.daily[1].temp.max;  /* need to round */
        let lowTemp = data.daily[1].temp.min;
        $('#highLow').html(`H: ${highTemp}, L:${lowTemp}`);

        let icon = data.daily[1].weather[0].icon;  /* need to convert # to jpeg */
        $('#icon').html(`${icon}`);

        let forecast = data.daily[1].weather[0].description;
        $('#forecast').html(`${forecast}`);

        let windSpeed = data.daily[1].wind_speed;
        let windDirection = data.daily[1].wind_deg;
        $('#wind').html(`${windSpeed}:${windDirection}`);

        let atmosPressure = data.daily[1].pressure;
        $('#pressure').html(`${atmosPressure}`);

        let dawnDay = data.daily[1].sunrise;
        let duskDay = data.daily[1].sunset;
        $('#sun').html(`${dawnDay}, ${duskDay}`);
    }















})();