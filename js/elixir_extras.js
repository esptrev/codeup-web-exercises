"use strict";

//Elixir Extras


// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`
function isOdd(number){
    return number
}
console.log(isOdd(4));

// -Make a function named `isEven(number)`
function isEven(num){
    return num
}
console.log(isEven(5));
// - Make a function named `identity(input)` that returns the input exactly as
// provided.
function identity(input){
    return input
}
console.log(identity("Hello Codeup"));

// - Make a function named `isFive(input)`
function isFive(input){
}
isFive()
// - u8
// - Make a function named `addFive(input)` that adds five to some input.
function addFive(num){
    return (num + 5);
}
console.log(addFive(5));

// - Make a function named `isMultipleOfFive(input)`
function isMultipleOfFive(number){
    return (number % 5 === 0);
}
console.log(isMultipleOfFive(9))

// - Make a function named `isThree(input)`
function isThree(input){
    return input
}

// - Make a function named `isMultipleOfThree(input)`
function isMultipleOfThree (value){
    return (value % 3 === 0);
}
// - Make a function named `isMultipleOfThreeAndFive(input)`
function isMultipleOfThreeAndFive (integer){
    return (integer % 3 === 0 && integer % 5 === 0);
}
// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`
function isMultipleOf(target, n){
    return (target %  n === 0);
}

// - Make a function named `isTrue(boolean)`
function isTrue(boolean){
    return boolean
}
// - Make a function named `isFalse(boolean)`
function isFalse(boolean){
    return boolean
}
// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true
function isTruthy(input){
 return input
}
console.log(isTruthy(5));

// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false
function isFalsey(input){
    return input;
}
console.log(isFalsey(-0))

// - Make a function named `isVowel(letter)`
function isVowel (letter){
    if (letter === "a" || letter === "e" || letter ==="i" || letter ==="o" || letter ==="u" || letter ==="A" || letter ==="E" || letter ==="I" || letter ==="O" || letter ==="U"){
        return true;
    }
    return false
}
// - Make a function named `isConsonant(letter)`
function isConsonant(letter){
    return (letter !=="a" || letter === "e" || letter ==="i" || letter ==="o" || letter ==="u" || letter ==="A" || letter ==="E" || letter ==="I" || letter ==="O" || letter ==="U" )
}
// - Make a function named `isCapital(letter)`
function isCapital(letter){
    return (letter.toUpperCase())
}
// - Make a function named `isLowerCase(letter)`
function isLowerCase(letter){
    return (letter.toLowerCase());
}
// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter
function hasLowerCase(string){
    return(string !== string.toUpperCase())
}
console.log(hasLowerCase("ABCDEF"));
// - Make a function named `isSpace(letter)` that returns if a character is a space
// character
function isSpace(letter){
    if(letter === ' '){
    return true;
}
return false
}

// - Make a function named `isZero(number)`
function isZero(number){
    return (number === 0)
}
// - Make a function named `notZero(input)` that returns true if the input is not zero
function notZero(input){
    return(input !== 0);
}
// - Write a function named `lowerCase(string)`
function lowerCaseString(string){
    return(string.toLowerCase());
}
// - Write a function named `double(n)` that returns a number times two
function double(number){
    return(number * 2);
}
// - Write a function named `triple(n)` that returns a number times 3
function triple(number){
    return(number * 3);
}
// - Write a function named `quadruple(n)` that returns a number times 4
function quadruple(n){
    return(n * 4);
}
// - Write a function named `half(n)` that returns 1/2 of the provided input
function half(n){
    return(n / 2);
}
// - Write a function named `subtract(a, b)` that returns `a` minus `b`
function subtract(x , y){
    return(x - y);
}
// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
function multiply(num1 , num2){
    return(num1 * num2);
}
// - Write a function named divide(a, b) that returns `a` divided by ~b~
function divide(num1,num2){
    return(num1 / num2);
}
//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
function remainder(a,b){
    return(a % b);
}
// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b
function modulo(a,b){
    return(a % b);
}
// - Write a function named `cube(n)` that returns n * n * n
function cube(n){
    return Math.pow(n, 3);
}
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
function squareRoot(n){
    return Math.pow(n, .5);
}
// - Write a function named `cubeRoot(n)` that returns the cube root of the input
function cubeRoot(k){
    return Math.pow(k, 1/3);
}
// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.
function invertSign(number){
    if (number === parseInt(number)){
        return number * -1;
    }else{
        return false;
    }
}
// - Write a function named `degreesToRadians(number)`
function degreesToRadians(){
    return
}
// - Write a function named `radiansToDegrees(number)`
function radiansToDegrees(){
    return
}
// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
function isBlank(char){
    return /\s/g.test(char);
}
// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
function trim(string){
    return string.trim();
}
// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value
function areEqual(input1,input2){
    return(input1 == input2);
}
// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.
function areIdentical(input1,input2){
    return(input1 === input2);
}
// - Make a function named `not(input)` returns the input with a flipped boolean
function not(input){
    return !input;
}
// - Make a function named `notNot(input)` that the negation of the negation of the
// input.
function notNot(input){
    return !!input;
}
// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND
function and(predicate1, predicate2){
    return predicate1 && predicate2;
}
// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR
function or(predicate1, predicate2){
    return predicate2 || predicate1;
}
// - Write a function called `reverseString(string)` that reverses a string
function reverseString(string){
    return string.split('').reverse().join('');
}
// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.
function absoluteValue(integer){
    return Math.abs(integer);
}
// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.
function rollDice(sides){
    return Math.floor(Math.random() * sides + 1) + 1;
}
//
//
//
// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
function returnTwo(){
    return '2';
}

console.log(returnTwo());
// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
function sayHowdy(){
    console.log("Howdy!");
}
sayHowdy();
//    Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value
//
// 1. Make a function called returnName() that returns the string of your name
function returnName() {
    return 'Trevor';
}
// Test this function with `console.log(returnName())
console.log(returnName());
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
function addThree(numb1){
    return ( numb1+ 3);
}
var numb1 = 5
console.log(addThree(numb1));
//
// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.
function sayString(){
    return;
}

console.log('codeup');
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
function identity(input){
    return input;
}

console.log(identity('gobble gobble'));
//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1,10));

//
// - Write a function called `first(input)` that returns the first character in the
// provided string.
function firstChar(input){
    console.log(input.charAt(0));
}
firstChar("trevor");
// - Write a function called `last(input)` that returns the last character of a
// string
function lastCharacter(input){
    return(input.charAt(input.length - 1));
}
console.log(lastCharacter('trevor'));
//
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
function everythingButTheFirst(string){
    return(string.slice(1, string.length));
}

console.log(everythingButTheFirst('trevor'));
//
// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
function reversedString(stringtoenter){
    return(reverseString(stringtoenter));
}
console.log(reversedString('trevor'));
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
function isNumeric(num){
    return(!isNaN(num));
}
console.log(isNumeric('true'));

//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
function countString(input){
    return input.length;
}
console.log(countString('The Witcher is crazy good!'))
//
// - Write a function called `add(a, b)` that returns the sum of a and b
function addition(num1,num2){
    return num2 + num1;
}

console.log(addition(10,5));
//
// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
function doMath(operator, num1, num2){
    var multi = multiply(9,9);
    var add = addition(9,9);
    var sub = subtract(910,9);
    return(sub);
}
console.log(doMath());

//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
function countWhitspace(stringInput) {
    return(stringInput.length - stringInput.trim().length);
}
console.log(countWhitspace("   My name is Trevor   "));
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
function noStringsAttached(string, substring){
    var string = "Weather has been great!";
    var substring = "great";
    if(string.includes(substring)){
        return(string.replace(substring, ""));
    }else{
        return string;
    }
}
console.log(noStringsAttached())

// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
function whereIsTheA(string){
    return((string.charAt(string.length - 1) === "a"))
        return true;
}
console.log(whereIsTheA("pizza"));
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
function returnWhiteSpace(input){
    console.log(input.match(/^(\s*)/)[1].length);
}
returnWhiteSpace("   how you doing?");

// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.

function returnMessage() {
    calledFunction();
    console.log("Calling the called function");
}
function calledFunction() {
    console.log("This doesn't make any sense to me");
}
returnMessage();
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.

var userName = "holeymoley";
var userPassWord = "crickets";
var userAge = parseInt("19");
var adMin = 'yes';

function willLoginUser(){
    return (oldEnough === true || areYouAnAdmin === true || validPassword === true);
    }
console.log(willLoginUser())

function validPassword(){
    if(userName.includes(userPassWord)){
        return false;
    }else {
        return true;
    }
}
console.log(validPassword());

function oldEnough(){
    if (userAge >= 18){
        return true;
    }else {
        return false;
    }
}
console.log(oldEnough());

function areYouAnAdmin(){
    if (adMin === 'yes'){
        return true;
    }else {
        return false;
    }
}
console.log(areYouAnAdmin());