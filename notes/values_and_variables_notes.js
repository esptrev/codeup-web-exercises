////////////////////////////////////////////////////////////////
///////////////////////// Values and Variables /////////////////
// Variables can be used to store values
// Use console.log to see the output in the console
console.log("Jonas");
console.log(23);

// Use const, let and var to declare variables
let firstName = "Matilda";
console.log(firstName);

// Variable name conventions
// Do not use reserved words
// Best practice is to camelCase
let jonas_matilda = "JM"; // Not this
let $function = 27; // Not this

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

///////////////////////////////////////////////////////////////////
//////////////////////// Data Types ///////////////////////////////

// There are five primitive data types
// String, number, boolean, null and undefined
let javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // Type of this is string

javascriptIsFun = true;
console.log(typeof javascriptIsFun); // Type of this is boolean

console.log(typeof 23); // Type of this log is number
console.log(typeof 'Jonas'); // Type of this log is string

let year; //This is undefined
console.log(year);//This is undefined
console.log(typeof year);//This is undefined

year = 1991; //Type is number
console.log(typeof year); //Type is number

console.log(typeof null);

//////////////////////////////////////////////////////////////////
/////////////////////// let, const and var //////////////////////
// var does not have a scope
// let has a scope inside of a code block.
// I.E. if let is declared inside a function only that function would be able to access the variable
// const is a variable that cannot be mutated (changed)
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // Cannot do this because birthYear is const
// const job; Not allowed to set a const variable and not initialize it

var job = 'programmer';
job = 'teacher'

// lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////////////////////////////////////////
///////////////// Type Conversion and Coercion ////////////////////////

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////////////////////////////////////
////////////////// Truthy and Falsy Values ////////////////////////

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}