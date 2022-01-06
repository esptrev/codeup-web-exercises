(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
     planetsArray = planetsString.split('|')
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     let newPlanetString = planetsArray.join('<br>');
    console.log(newPlanetString);

    //from David Collins,  couldn't wrap head around this
    console.log("<ul>");
    planetsArray.forEach(function (planet){
        console.log("<li>" + planet + "</li>");
    })
    console.log("</ul>");
    console.log("end of unordered list array");


//    From Patrick  Quilty
    planetsArray.unshift('</li></ul>');
    planetsArray.push('</li></ul>');
    let slicedPlanets = planetsArray.slice(1,9);
    console.log(slicedPlanets);
    let joinedPlanets = planetsArray[0] + slicedPlanets.join("</li><li>") + planetsArray[9];
    console.log(joinedPlanets);
    

    // My ul attempt
    for(let i = 0; i < planetsArray.length; i ++){
        console.log("<li>" + planet + "</li>");
    }


})();


//More array practice.....

planetaryArray =['mercury', 'jupiter', 'venus', 'pluto', 'earth', 'mars', 'uranus', 'saturn', 'neptune' ];
planetaryArray.sort();
console.log(planetaryArray);
planetaryArray.forEach(function (planet,index){
    console.log(planet, index)
})
planetaryArray.sort().reverse();
console.log(planetaryArray);
planetaryArray.forEach(function (planet,index){
    console.log(planet, index)
})
console.log('little practice for each');
