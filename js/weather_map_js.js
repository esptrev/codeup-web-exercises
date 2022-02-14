(function () {
    'use strict';
    const OPEN_WEATHER_APPID = TREVORS_WEATHER_MAP_KEY;
    mapboxgl.accessToken = TREVORS_MAP_TOKEN;
    const OPTIMAL_ZOOM_LEVEL = 20;
    const STARTING_COORDS = [-98.4936, 29.4241];
    const weatherURL = `http://api.openweathermap.org/data/2.5/onecall`;
    let dailyWeatherInfo = [];

    var weatherOptions = {
        lat: 29.4241, /* i want coords to feed from map center */
        lon: -98.4936,
        appid: TREVORS_WEATHER_MAP_KEY,
        units: "imperial"
    };

    const map = new mapboxgl.Map({
        container: 'mapDiv', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-98.4861, 29.4260], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });

////// CENTERS MAP AND SETS MARKER AT CENTER WHEN MAP STOPS MOVING, ALLOWS MARKER TO BE SET USING MAPBOX GEOCODE CONTROL ///////
    function onMoveEnd() {
        var coords = map.getCenter();
        marker.setLngLat(coords);
        makePopUpForCoords(coords)
        // console.log(coords);
        // appendWeather();
        dailyWeatherUpdates();
    }

    map.on('moveend', onMoveEnd);

    ////////MAPBOX GEOCODE CONTROLLER, COPIED DIRECTLY FROM WEBSITE//////////

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            zoom: OPTIMAL_ZOOM_LEVEL,
            placeholder: 'Search Box',
            mapboxgl: mapboxgl,
            marker: false,
        })
    );
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(STARTING_COORDS)
        .addTo(map);
    marker.on(`load`, loadWeather());
    /*THE 'DRAGEND' IS FROM MAPBOX */
    marker.on('dragend', endOfMarkerDrag);

    //// SETS MARKER AT END OF MARKER DRAG /////
    function endOfMarkerDrag() {
        const coords = marker.getLngLat();
        weatherOptions.lat = coords.lat;
        weatherOptions.lon = coords.lng;

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
        weatherOptions.lat = coordArray[1];
        weatherOptions.lon = coordArray[0];
        marker.setPopup(popup);
        popup.addTo(map);
        loadWeather();
    }


    function loadWeather() {
        $.get(weatherURL, weatherOptions).done(function (data) {
            console.log(data);
            dailyWeatherInfo = data.daily;
            console.log(dailyWeatherInfo);
            convertWeatherData(dailyWeatherInfo);
            dailyWeatherUpdates(dailyWeatherInfo);

        })

    }

    function dailyWeatherUpdates(weather) {
        $(`#cardStack`).html('');
        weather.forEach(function (day) {
            console.log(day);
            var dailyHTML = createDailyForecastHTML(day);
            $(`#cardStack`).append(dailyHTML);
        })

    }


    function createDailyForecastHTML(singleDay) {

        // language = HTML
        var html = `
			<div class="col-4">
				<div id="dayOfWeek" class="card-body">${singleDay.dt}</div>
				<div id="cardBody" class="card-body">
					<div id="highLow">H:${singleDay.temp.max} / L:${singleDay.temp.min}</div>
					<div id="icon">${singleDay.weather[0].icon}</div>
					<div id="forecast">${singleDay.weather[0].description}</div>
					<div id="wind">${singleDay.wind_speed} / ${singleDay.wind_deg}</div>
					<div id="pressure">${singleDay.pressure}</div>
					<div id="sun">${singleDay.sunrise}/${singleDay.sunset}</div>
				</div>
			</div>`


        return html;

    }



//// delete my appendweather function///////

    function convertWeatherData(days) {
        let dayOfWeek = (days.temp);
        console.log(dayOfWeek)

    }






        // let utcConversion = days[0].dt
        // const myDate = new Date(1644516000 * 1000);
        // console.log(myDate);
//         const dayOfWeek = getDayOfWeek(myDate.getDay());
//         console.log(myDate.toString().substr(0, 3));
//         console.log(setTime('America/Chicago'))

        // const myDate = new Date(data.daily[0].dt);
        // console.log(days[0].temp.max);

    //     let dayOfWeek = ((data.daily.dt) * 1000);  /* need to convert */
    //  //   $('#dayOfWeek').html(`${dayOfWeek}`);
    //
    //     let highTemp = data.daily[1].temp.max;  /* need to round */
    //     let lowTemp = data.daily[1].temp.min;
    //   //  $('#highLow').html(`H: ${highTemp}, L:${lowTemp}`);
    //
    //     let icon = data.daily[1].weather[0].icon;  /* need to convert # to jpeg */
    //  //   $('#icon').html(`${icon}`);
    //
    //     let forecast = data.daily[1].weather[0].description;
    //  //   $('#forecast').html(`${forecast}`);
    //
    //     let windSpeed = data.daily[1].wind_speed;
    //     let windDirection = data.daily[1].wind_deg;
    //  //   $('#wind').html(`${windSpeed}:${windDirection}`);
    //
    //     let atmosPressure = data.daily[1].pressure;
    // //    $('#pressure').html(`${atmosPressure}`);
    //
    //     let dawnDay = data.daily[1].sunrise;
    //
    //     console.log(`i'm looking for this ${Date(dawnDay)}`);
    //     console.log(Date(data.current.dt));
    //     let duskDay = data.daily[1].sunset;
    //    $('#sun').html(`${dawnDay}, ${duskDay}`);

        // ////////USE THIS FUNCTION TO CONVERT DEGREES TO HEADING///////////
        // function degToCompass(num) {
        //     var val = Math.floor((num / 22.5) + 0.5);
        //     var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        //     return arr[(val % 16)];
        // }

        ////////////USE TO CONVERT MILLIBARS TO INCHES MERCURY//////////////
    ////////    To convert millibars to inches of mercury, millibar * 0.0295301./////////




    function onSuccessfulLoad(data) {
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);


    }


})();

// (function() {
//     const OPENWEATHER_KEY = 'c44633dab287ad6aa0232cce2b4a4815';
//
//     function getDayOfWeek(dayNumber) {
//         if(dayNumber === 4) {
//             return "Thu";
//         } else {
//             return "Unknown";
//         }
//     }
//
//     function setTime(timeZ) {
//         return new Intl.DateTimeFormat(navigator.language, {
//             timeZone: timeZ,
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric'
//         }).format(new Date());
//     }
//
//     $(document).ready(function() {
//
//         $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=hourly,minutely&appid=${OPENWEATHER_KEY}&units=imperial`)
//             .done(function (data) {
//                 console.log(data);
//             });
//
//         // const dateMS = ;
//         const myDate = new Date(1644516000 * 1000);
//         const dayOfWeek = getDayOfWeek(myDate.getDay());
//         console.log(myDate.toString().substr(0, 3));
//         console.log(setTime('America/Chicago'))
//     });
//
// })();
