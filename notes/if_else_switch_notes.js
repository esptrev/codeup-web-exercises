///////////////////////////////////////////////////////////////////////////
////////////////// Taking Decisions: if / else Statements ////////////////
// if (condition) {
//   DO SOMETHING HERE
// } else if (condition) {
//   DO SOMETHING ELSE HERE
// } else {
//   IF THOSE DONT WORK DO THIS
// }

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


/////////////////////////////////////////////////////////////////////////
/////////////////////// The switch Statement ///////////////////////////
const day = 'friday';

switch (day) {
// if   (this)
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

///////////////////////////////////////////////////////////////////////////
//////////////////////// Statements and Expressions //////////////////////
// Statements can contain other constructions like expressions, keywords, operators and other stuff. Expressions are parts of statements that return values

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

/////////////////////////////////////////////////////////////////////////
///////////////// The Conditional (Ternary) Operator ///////////////////
const age = 23;
// (condition) ? if true do this : if false do this
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);