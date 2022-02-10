///////////////////////////////////////////////////////////////////////////
///////////////////////////// Functions ///////////////////////////////////

// This is an ananymous function as it does not pass in an parameter
function logger() {
  console.log('My name is Jonas');
}

// Calling / running / invoking function
// This makes them activate
logger();

// This function passes in two parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// This passes in 5 as the apple argument and 0 as the orange argument
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// This passes in 2 as the apple argument and 4 as the orange argument
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// This is a set JS function that takes the string 23 and converts it to a number
// These are called methods and this is just one of many
const num = Number('23');

///////////////////////////////////////////////////////////////////////////
///////////////// Function Declarations vs. Expressions ///////////////////

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//////////////////////////////////////////////////////////////////////////
//////////////////////// Arrow functions /////////////////////////////////

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

/////////////////////////////////////////////////////////////////////////////
///////////////////// Functions Calling Other Functions//////////////////////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

////////////////////////////////////////////////////////////////////////////
///////////////////////// Reviewing Functions //////////////////////////////

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));