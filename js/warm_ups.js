//auto loan
//credit score > 680 && cash on hand 4000
// || cash on hand 10000
// let cashOnHand = 10000;
// let creditScore = 590;
//
// var loanApproved = ((cashOnHand >= 4000 && creditScore >= 680) || (cashOnHand >= 10000 && creditScore <= 680))
// console.log(loanApproved)
//
//  if ((cashOnHand >= 4000 && creditScore >= 680) || (cashOnHand >= 10000 && creditScore <= 680)) {
//     console.log("Congratulation your loan has been preapproved!");
//
// } else{
//     console.log("Sorry we cannot approve loan at this time");
// }


//redo with if/else/if else/  with that credit score you will need more of a down paymnt
//console.log(loanApproved)


// Monday Dec 13, '21 Create a function called isFive that takes in an input and returns true if that input is
//the number 5. Otherwise return false

// function isFive (num){
//     return (num === 5);
// }
// console.log(isFive(5));

// function isFive (num){
//
//     if (num === 5){
//         return true;
// } else if(num === "5") {
//         parseInt(num);
//         return true;
//     } else {
//     return false}
// }
// console.log(isFive(6));
//
// function isMultipleOfThree(number) {
//     console.log(number % 3 === 0);
// }
// isMultipleOfThree(12);

// Write a function called add(num1, num2) which returns the sum of a and b
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.


// function add(num1,num2){
//     return(num1 + num2);
// }
// console.log(add(5,5));
// console.log(add(-8, 5));
// console.log(add(-5, -3));
//
// function square(numToSqr){
//     return(numToSqr ** 2);  /* could also use Math.pow(x,y) to exponents */
// }
// console.log(square(5));
//
// function sumOfSquares(int1,int2){
//     var squaredInt1 = square(int1);  /*These extra lines may make code more readable */
//     var squaredInt2 = square(int2);
//     return add(squaredInt1, squaredInt2);
    // return(add(square(int1), square(int2)));  /* my original code */
// }
// console.log(sumOfSquares(2,2));
//
// function sqRoot(num){
//     return(Math.sqrt(num) ** 2);
// }
// console.log(Math.round(sqRoot(20)));

/*  Write a function named getFizzBuzz(startingNum) which performs the following actions:
    If startingNum is divisible by 3
    console log "fizz"
    Else, if startingNum is divisible by 5
    console log "buzz"
    If startingNum is divisible by 3 AND divisible by 5
    return a string which says "FIZZ BUZZ"
    Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
    What if getFizzBuzz doesn't return a value (VOID)?
    How do you want to handle that?
*/
// function getFizzBuzz(startingnum){
//         if (startingnum % 3 === 0 && startingnum % 5 === 0) {
//             console.log("Fizz Buzz");
//         } else if (startingnum % 3 === 0) {
//             console.log("Fizz");
//         } else if (startingnum % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log("yippe kay a");
//         }
//     }
// getFizzBuzz(88)    //My Code from exercise

// function getFizzBuzz(startingnum){  //Casey Code from Exercise
//     if(startingnum % 3 === 0 && startingnum % 5 === 0){
//         return("Fizz Buzz");
//     }else if(startingnum % 3 === 0){
//         console.log("fizz");
//     }else if(startingnum % 5 === 0){
//         console.log("buzz");
// }
// }
// function tryGetFizzBuzz(input){
//     let maybeFizzBuzz = getFizzBuzz(input);
//     if(!!maybeFizzBuzz){
//         console.log(maybeFizzBuzz)
//     }
// }
// function runThatProgramThingy (){
//     tryGetFizzBuzz(9);
//     tryGetFizzBuzz(10);
//     tryGetFizzBuzz(15);
// }
// runThatProgramThingy()

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
// function itsOdd(runTimes){
//     for(let i = 0; i <= runTimes; i++){
//         if(i % 2 === 0){
//             continue;
//         }
//         console.log("Here is an odd number: " + i + " .");
//     }
// }
// itsOdd(10);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds
// function forLoopEvenOrOdd(r){
//     for( let i = 0; i <= r; i++){
//         if(i % 2 === 0){
//             console.log(i + " This is an even iteration.");
//         }else {
//             console.log(i + " This is an odd iteration");
//         }
//     }
// }
// forLoopEvenOrOdd(10)


// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

// function enterTheCorrectPassword(){
//     var correctPassWord = "codeup";
//     for(let i = 1; i <= 3; ++i){
//         var userEnteredPassword = prompt("Please enter your password in box below")
        // if(userEnteredPassword === correctPassWord){
        //     alert("You will be logged in momentarily.");
        //     break;
        // }else if(userEnteredPassword !== correctPassWord && i < 3){
        //     alert("Wrong password, please try again");
        // }else {
        //     alert("You've entered wrong password too many times, login will be locked");
        // }
    // }
// }



//Warm up exercises for Objects
// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements (edited)
/*
*** Continuing MINI EXERCISE until lunch ***
Change the director member of your movies to an object
with firstName and lastName members
Make an array member for your movies called genres.
    It is an array of string elements where each element
is one of your movies??? genres from imdb.com
and change your printMovie function
please cupdate as you complete this ungraded practice exercise
//
//
*** last part of MINI EXERCISE ***
Add a rate(rating) function to each of your movie objects.
    The function takes an int parameter called rating
Modify rate(rating) to set a myRating property on that object
modify printMovie to display myRating for each movie
15 minutes
*/


var movies = [];
    movies[0] = {};
        movies[0].title= 'The Hateful Eight'
        movies[0].yearOfRelease= '2015'
        movies[0].rating= 'R'
        movies[0].director= [
         {
        firstName:'Quentin',
        lastName: 'Tarantino',
         },
    ];
        movies[0].imdbRating=7.8
        movies[0].wonAcademyAward= 'yes'
        movies[0].mypersonalrating = 0
        movies[0].bestRatingPossible = 4
        movies[0].genres= [
           {
            mainGenre: 'Crime',
            subGenre1:'Drama',
            subGenre2: 'Mystery',
            subGenre3: 'Murder',
           }
        ];


    movies[1] = {};
        movies[1].title= 'Braveheart'
        movies[1].yearOfRelease= '1995'
        movies[1].rating= 'R'
        movies[1].director= [
            {
            firstName:'Mel',
            lastName: 'Gibson',
             },
    ];
        movies[1].imdbRating= 8.3
        movies[1].wonAcademyAward= 'yes'
        movies[1].mypersonalrating = 0
        movies[1].bestRatingPossible = 4
        movies[1].genres= [
           {
            mainGenre: 'Period piece',
            subGenre1:'Drama',
            subGenre2: 'History',
            subGenre3: 'Biography',
           },
    ];
    movies[2] = {};
        movies[2].title= 'Imaginary Movie'
        movies[2].yearOfRelease= '2010'
        movies[2].rating= 'PG'
        movies[2].director= [  /*try removing array brackets and just use object curly*/
        {
            firstName:'Trevor',
            lastName: 'Esparza',
        },
    ];
        movies[2].imdbRating= 10
        movies[2].wonAcademyAward= 'no'
        movies[2].mypersonalrating = 0
        movies[2].bestRatingPossible = 4
        movies[2].genres=[
        {
            mainGenre: 'Mama Drama',
            subGenre1:'Rom-Com',
            subGenre2: 'DIY',
            subGenre3: 'YouTuber Extraordinary',
        },
    ];

// moviesArray.push(movieTwo,movieOne,movieThree);

function printAllMovies(){
    for (let i = 0; i < movies.length; i++) {
        console.log((movies[i]));
        printIndividualMovieInfo(movies[i]);
    }
}
printAllMovies(movies);
console.log('End of function');

function printIndividualMovieInfo(movie){
        console.log('Title:  ' + movie.title);
        console.log('\tDate Released:  ' + movie.yearOfRelease);
        console.log('\tMPAA stated rating:  ' + movie.rating);
        console.log('\tImDB rating:  ' + movie.imdbRating);
        console.log('\tMy thoughts:  ' + movie.mypersonalrating);
        jailBreakDirectorObject(movie);


}
function jailBreakDirectorObject(movie){
    // var ourDirector = movie.director.join(" ");
    // for (let i = 0; i < ourDirector.length; i++) {
        console.log(movie.director);
        // printDirectors(movie);
}
function printDirectors(){
    console.log(ourDirector.firstName);
}


// console.log('array to string sans join');
// arrayToSplit = ['me', 'you','us','him','her','she','them']
// let myString = '' ;
// function arrayToString(){
//     for (let i = 0; i < arrayToSplit.length; i++) {
//         myString += arrayToSplit[i];
//     }
// }
// arrayToString(arrayToSplit);
// console.log(myString);

// JavaScript Warmup:
//     Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c ???roach??? has no occurrances.
//


function removeAll(array, value){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value){
            console.log(value);
        }else{
            console.log('value not present');
        }
    }
}
let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
removeAll(bugs,'ant');


//Practice js from Raymond on Slack

function sumTheNumbers(inputA, inputB){
    let sum = 0
    if(inputA < inputB){
        for (let i = inputA; i <= inputB ; i++) {
            sum += i;
        }
    }else {
        for (let i = inputB; i <= inputA ; i++) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumTheNumbers(0, -1)); //Expected -1
console.log(sumTheNumbers(1,2)); //Expected 3
console.log(sumTheNumbers(1, 5)); //Expected 15


var myCats = [
    {
        catName: "Fifi",
        age: 5
    },
    {
        catName: "Fluffy",
        age: 3
    },
    {
        catName: "Abby",
        age: 7
    }
];
function getNthCat(array, n){
    return array[n];
}
// print out the cat at index 1
let aCat = getNthCat(myCats, 1);
console.log(aCat.catName);
console.log(aCat.age);



function reverseString(inStr){
    return(inStr.split('').reverse().join(''));
}
console.log(reverseString('trevor'));


// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75
console.log('find arry avg warmup')
function findAverage(array) {
    let totalOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        totalOfArray += array[i];
    }
    return totalOfArray / array.length
}
console.log(findAverage([95,74,86,100]));

// morning JS warmup:
//     write a function called sumOfSquares(a, b)
// takes 2 parameters called a and b
// returns the sum of the squares of a and b
// i.e., (a to the power of 2) + (b to the power of 2)
// e.g., console.log(sumOfSquares(2, 3));
// will return 13.

console.log('sum of squares warm-up');
function sumOfSquares(a,b){
    return(Math.pow(a,2) + Math.pow(b,2))
}
console.log(sumOfSquares(2,3))

// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
//     returns "first" if the first string parameter is longer
// returns "second" if the second parameter is longer
// returns "neither" if they are the same length
// returns false if either or both of the parameters are not strings


function whichStringIsLonger (stra, strb){
    if(typeof stra !== 'string' || typeof strb !== 'string'){
        return false;
    }
    if(stra.length > strb.length){
        return "First"
    }
    if(strb.length > stra.length){
        return "Second";
    }
    if(strb.length === stra.length)
        return "Neither";
}
console.log(whichStringIsLonger("bobby", "lou")); // returns first
console.log(whichStringIsLonger("bob", "louise")); // returns second
console.log(whichStringIsLonger("bob", "lou")); // returns neither
console.log(whichStringIsLonger("bobby", 2)); // returns false
console.log(whichStringIsLonger(1, "lou")); // returns false

// write a function called sumOfThreeNumbers that returns the sum of the 3 numeric arguments provided (i.e., it has 3 parameters)
// if any of the parameters are non-numeric then return false
//
console.log(sumOfThreeNumbers(1, 2, 3)); // return 6
console.log(sumOfThreeNumbers(-10, 2, 3)); // return -5
console.log(sumOfThreeNumbers(1, 2, "bob")); // return false

function sumOfThreeNumbers (p1,p2,p3){
    if (isNaN(parseInt(p1)) || isNaN(parseInt(p2)) || isNaN(parseInt(p3))){
        return false;
    }else {
        return p1 + p2 + p3;
    }
}

function inchesToCentimeters (inches){
    const centsInInches = 2.54;
    if(isNaN(parseInt(inches))){
        return false;
    }
    return parseInt(inches) * centsInInches;
}

console.log(inchesToCentimeters(5));
console.log(inchesToCentimeters(1));
console.log(inchesToCentimeters(10));
console.log(inchesToCentimeters('bob'));
console.log(inchesToCentimeters(true));

function upperCase (paramString){
    if(typeof paramString !== 'string'){
        return false;
    }else {
        return paramString.toUpperCase();
    }
}
/*Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
    NOTE: the values in the object should be of the number type
Example input: '35, 42'
Example return: {low: 35, high: 42}
*/

function convertLowHighToObject(str){
    let tempArr = str.split(', ')
    console.log(tempArr)
    return {
        low: parseInt(tempArr[0]),
        high: parseInt(tempArr[1])
    }
}


console.log(convertLowHighToObject('35, 42'))

