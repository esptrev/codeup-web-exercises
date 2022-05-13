
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name)
console.log(names)

//2. Get array of all heights
const heights = characters.map(character => character.height)
console.log(heights);

//3. Get array of objects with just name and height  properties
const nameHeight = characters.map(character => ({name: character.name, height: character.height}))
console.log(nameHeight)

//4. Get array of all first names
const firstName = characters.map(character => character.name.split(" ")[0])
console.log(firstName)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) =>{
    return acc + cur.mass;
},0)
console.log(totalMass)

const totalMassSH = characters.reduce((acc,cur) => acc + cur.mass,0);
console.log(totalMassSH)
//2. Get total height of all characters
const combinedHeight = characters.reduce((acc,cur) => acc + cur.height,0)
console.log(combinedHeight);
//3. Get total number of characters by eye color

//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const heavy = characters.filter((character) => {
    return character.mass > 100
})
console.log(heavy)
//2. Get characters with height less than 200
const short = characters.filter((character) => {
    return character.height < 200
})
console.log( short);
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
const massAsscending = characters.sort((a,b) =>{
    return a.mass - b.mass
})
console.log(massAsscending);
const massDescending = characters.sort((a,b) =>{
    return b.mass - a.mass;
})
console.log(massDescending);
//2. Sort by height
//3. Sort by name
const byName = characters.sort((a,b) => {
    if(a.name < b.name) return -1;
    return 1;
})
console.log(byName);
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

// © 2022 GitHub, Inc.

