///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Arrays////////////////////////////////////////
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// Creating an array with the names
// The different indexes are seperated with a comma
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Another way to create an array
const y = new Array(1991, 1984, 2008, 2020);
// This only creates an array with a length of 7 and the values of all 7 indexes are undefined.
const y = new Array(7);
// How to access an index of an array
console.log(friends[0]);
console.log(friends[2]);
// Can also use the .at(index) to access the value of an array
console.log(friends.at(0));
// .length will return the length of an array
console.log(friends.length);
console.log(friends[friends.length - 1]);
// Can assign a certian index a value
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';

// You can insert variables, primitives and even do math inside an array
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// You can also have function returns as values in an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//////////////////////////////////////////////////////////////////////////////
///////////////////////Basic Array Operations (Methods)///////////////////////

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// Push Method - The push() method adds one or more elements to the end of an array and returns the new length of the array
// push(element0)
// push(element0, element1)
// push(element0, element1, /* ... ,*/ elementN)

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift Method - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)

friends.unshift('John');
console.log(friends);

// Remove elements
// Pop Method - The pop() method removes the last element from an array and returns that element.
// pop()
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift Method - The shift() method removes the first element from an array and returns that removed element
//shift()
friends.shift();
console.log(friends);

// Searching within an array
// IndexOf Method - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// Includes Method - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// includes(searchElement)
// includes(searchElement, fromIndex)
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

//////////////////////////////////////////////////////////////////////////////
/////////////////// Advanced Array Operations (Methods) ////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice- Method The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
// slice()
// slice(start)
// slice(start, end)

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// Splice Method- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

console.log(arr.splice(2));
console.log(arr.reverse());

// At Method - The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers
// at(index)
console.log(arr.at(0));
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// Map Method- creates a new array populated with the results of calling a provided function on every element in the calling array.
// This will create a brand new array based on the original array
// For each iteration it will apply a callback function
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);

// ForEach Method - he forEach() method executes a provided function once for each array element.
// forEach reg function = array.forEach(function() {})
// forEach arrow function = array.forEach(param => condition)
// The value, index and array must be accessed in this order
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Filter - creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Reduce - executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// Find Method - returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// Retrieve on element of an array based on a condition
// Needs a callback function that returns a boolean
const firstWithdrawal = account1.movements.find(mov => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));
console.log(account1);

// findindex method - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test
// Returns the index of the condition and not the value
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// Some Method - tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.(param => condition)
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

// Every Method - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
array.every(mov => condition)

// You can use a seperate callback function stored in a variable for most of the methods that require a callback function
const deposit = mov => mov > 0;
array.some(deposit);

// Flat Method - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// No callback function for this method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// The () will determine how deep to flatten the array: Default is 1
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

// FlatMap Method - The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
// Combines the map and the flat methods
// Cannot change how deep the method goes. Only 1 level.
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Sorting Arrays - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings
// Sort will mutate the original array
// The sort method will also convert to string then sort

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Acending
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
);

// Acending Refactored
movements.sort((a, b) => a - b);
console.log(movements);
Decending
console.log(
  movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  })
);

// Decending Refactored
movements.sort((a, b) => b - a);
console.log(movements);

// Progamatically create and fill arrays
// Fill Method - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings
// fill(value)
// fill(value, start)
// fill(value, start, end)
// Array.from(length: [#], () => condition)
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Summary - Ask what you want to do and you can figure out what method to use
// Mutate the original array
// Add to the original array: .push() and .unshift()
// Remove from the original array: .pop(), .shift() and .splice()
// Others: .reverse(), .sort() and .fill()

// A New Array:
// Computed from original: .map()
// Filter using condition: filter()
// Portion of the original: .slice()
// Adding original to another: .concat()
// Flattening the original: flat() and flatMap()

// An Array Index
// Based on value: .indexOf()
// Based on test condition: .findIndex()

// An Array Element
// Based on test condition: .find()

// Know if an Array includes
// Based on value: .includes()
// Based on test condition: .some() and .every()

// A new string
// Based on seperator string: .join()

// To transform to value
// Based on accumulator: .reduce()

// To just loop the array
// Based on callback: .forEach()