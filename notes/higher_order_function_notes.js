////////////////////////////////////////////////////////////////////////////
///////////////////////// Higher order function ///////////////////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
//ES5 - This is the old way of setting defaults
  numPassengers = numPassengers || 1;
  price = price || 199;
// New way of setting default value
// function hiPlane (numPassengers = 1, price = 199) {
//   DO SOMETHING HERE
// }

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 2);

//Setting undefined will skip this parameter since the paramters has a default value
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, `jonas`);

// First Class and Higher Order Functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

//Function returning another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ray');
greeterHey('Steven');

greet('Hello')('Jonas');

//Arrow function returning another arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Jonas');

//Call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.aitaCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Raymond Dugan');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book(23, 'Sarah Williams');
book.call(eurowings, 23, 'Raymond Dugan');

book.call(lufthansa, 239, 'Jonas');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 24, 'Raymond Dugan');

//Apply
// Will take an array of elements after the object call
const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData) = book.call(swiss, ...flightData);

//Bind method
book.call(eurowings, 23, 'Raymond Dugan');
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Raymond Dugan');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
const addTax3 = rate => value => console.log(value + value * rate);
addTax3(0.23)(100);

// IIFE Functions = Immediately Invoked Function Expressions

//IIFE
(function () {
  console.log('This will never run again');
})();

//IIFE Arrow
(() => console.log('This will never run again'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();