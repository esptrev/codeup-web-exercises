// //Convert Decimal to Binary then add, output should be string
// //Converts to Binary
// function decimalToBinary(decimal){
//     return (decimal >>> 0).toString(2);
// }
// console.log(decimalToBinary());
// //Adds binary
// function addBinary(a,b) {
//     return decimalToBinary(a+b);
// }
// console.log(addBinary(1,2));
// console.log(typeof addBinary());
//
// //Split the Digits then Square then and concatenate, return integer
//
// function squareDigits(num){
//     var array = num.toString().split('').map( function(int) {
//         var i = parseInt(int);
//         return i * i;
//     });
//
//     return parseInt(array.join(""));
// }
//
// //Accumulating characters Code should print out characters based on position in the string.
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// console.log(accum('kdjdj'));
//
// function accum(str) {
//     var res = [];
//     for(var i = 0; i < str.length; i++) {
//         var row = '';
//         for(var j = 0; j < i + 1; j++) {
//             row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
//         }
//         res.push(row);
//     }
//     return res.join('-');
// }
// console.log(accum('fgtyh'));
//
// //Code from Raymond on objects
// // for (const [key, value] of Object.entries(object1)) {
// //     console.log(`${key}: ${value}`);
// // }
// // Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
//
// // Input: start: 1 finish: 4 step: 1 | Output: 10
// // Input: start: 4 finish: 10 step: | Output: 13
//
// function sum(sequence){
//     let total = 0;
//     for (let i = 0; i < sequence.length; i++) {
//         total += sequence[i];
//     }
//     console.log(total);
// }
// sum([1,2,3,4]);
//
// /* Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).
// */
//
// function findSubString(string){
//     let partial = 'english';
//    return !!string.toLowerCase().includes(partial);
//
// }
// console.log(findSubString("SMFENgliSHasnD"));
// // findSubString("");
// let scores =[10,5,20,20,4,5,2,25,1]
// function breakingRecords(scores) {
//     let maxCount = 0;
//     let minCount = 0;
//     let maxScore = scores[0]
//     let minScore = scores[0];
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] < minScore) {
//             minScore = scores[i];
//             minCount++;
//         } else if(maxScore < scores[i]) {
//             maxScore = scores[i];
//             maxCount++;
//         }
//     }
//     return [maxCount,minCount];
//
// }
// console.log(breakingRecords(scores));
//
//
// // Remove all ! from string then add one to end
// function remove (string) {
//     let strArr = string.split('')
//     const vToRemove = '!';
//     const results = strArr.filter(function (x){
//         return  x !== vToRemove;
//     })
//     let finished = results.join('') + '!';
//     console.log(finished);
// }
// remove('!!!hi!!');
//
// // Take full name and return just initials
//
// function abbreviate (string){
//     let strRay = string.split('')
//     let initials = []
//     initials.push(strRay[0]);
//     let indSpace = strRay[strRay.indexOf(' ') + 1];
//     initials.push(indSpace);
//     let final = initials.join('');
//     return (final.toUpperCase());
//
// }
// abbreviate('trevo esparza')
//
// //Function to return Boolean if number is prime
// function isPrime(num){
//     if(num < 2){
//         return false;
//     }
//     if(num === 2){
//         return true;
//     }
//     if(num % 2 === 0){
//         return false;
//     }
// }
//
//
//
//
//
//
// // Function loneRanger, remove the element that occurs only once in the array
// let array = [12,1,12,3,12,1,1,2,3,3];
// function loneRanger(input){
//     for (let i = 0; i < input.length; i++) {
//         if(input.indexOf(input[i]) === input.lastIndexOf(input[i])){
//             return input[i];
//         }
//
//     }
// }
// console.log(loneRanger(array));
//
//
//
// // Find integers divisors
// function divisors(integer) {
//     let divArr = [];
//     for(let i = 2; i < integer; i++){
//         if(integer % i === 0){
//             divArr.push(i);
//         }
//
//     }
//     if(divArr.length === 0){
//         return integer + " is prime";
//     }
//     return divArr;
// }
// console.log(divisors(15));    /*   [3, 5]  */
// console.log(divisors(12));      /* [2, 3, 4, 6]*/
// console.log(divisors(13));     /*  ( "13 is prime")*/
//
// //Remove the last !
// function remove (string) {
//     if(string.charAt(string.length -1) === '!'){
//         return string.slice(0,-1);
//     }
//     return string;
// }
// console.log(remove("Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("!Hi!"));
// console.log(remove("Hi"));
// console.log(remove("Hi! Hi!"));
// console.log(remove("!Hi"));
//
// // doTest("Hi!!!", "Hi!!");
// // doTest("!Hi", "!Hi");
// // doTest("!Hi!", "!Hi");
// // doTest("Hi! Hi!", "Hi! Hi");
// // doTest("Hi", "Hi");
//
// //Find sum of divisors 3/5
// function solution(number){
//     let sumOfDivisors = 0;
//     if(number < 0){
//         return 0;
//     }else{
//         for(i=3;i<number;i++){
//             if(i % 3 === 0 || i % 5 === 0){
//                 sumOfDivisors += i;
//             }
//         }
//         return sumOfDivisors;
//     }
// }
//
// console.log(solution(15));
//
// //given two arrays, merge and find the median for the merged array
//
// let firstArray = [1,3,5,7,9,11,13];
// let secondArray = [2,4,6,8,10,12,14];
//
// function findMergedMedian(inputA, inputB){
//     for (let i = 0; i < inputA.length; i++) {
//         secondArray.push(inputA[i]);
//     }
//     let sortedArray = secondArray.sort((a,b) => a - b);
//     const middle = Math.floor(sortedArray.length / 2);
//     if(sortedArray.length % 2 === 0){
//         return((sortedArray[middle - 1] + sortedArray[middle]) / 2);
//     }
//     return sortedArray[middle];
// }
// console.log(findMergedMedian(firstArray,secondArray));
//
// // does first string contain all the letters of the second string
// // this one doesn't work
// function isItThere(inputA,inputB){
//     for (let i = 0; i < inputA.length; i++) {
//         if (inputB.indexOf(inputA[i]) <= -1) return false;
//     }
//     for (let i = 0; i < inputB.length; i++) {
//         if (inputA.indexOf(inputB[i]) <= -1) return false;
//     }
//     return true;
// }
// console.log(isItThere('trlevlor','rovert'))
//
// // iterate through the array adding every index to every index and then divide by k
// function divisibleSumPairs(n,k,array) {
//     var counter = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             console.log(array[i]);
//             let sum = array[i] + array[j];
//             console.log(array[j]);
//             if(sum % k === 0){
//                 counter++
//             }
//         }
//     }
//     return (counter);
// }
// divisibleSumPairs(5,3,[1,2,3,4,5]);
//
//
// /////////// Given a number array move all zeroes to end of array  ////////////////
//
// let originalArray = [0,1,0,2,0,3,0,4,0,5];
//
// originalArray.forEach(function (num){
//     if(num === 0){
//         originalArray.push(originalArray.splice(originalArray.indexOf(0), 1)[0]);
//     }
//     console.log(originalArray);
// })
//




// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);
//
// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }

// console.log(sayHello('trevor'));

const house = {
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1234
}
for (prop in house){
    console.log(prop,house[prop]);
}

let numb = 123;
console.log(numb.toString().split('').reverse().join(''));



function countDuplicates (string){
    const duplicates = {};
    let splitDuplicates = string.split('');
    console.log(splitDuplicates);
    splitDuplicates.forEach((char) => {
        duplicates[char] = (duplicates [char] || 0) + 1;
    });
    console.log(duplicates);
}
countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// // outputs:
// Person name cannot be blank
// false


/// LITTLE JS WARMUP FROM DOC ROB ///
function makePerson (pName,pAge){
    if(pName.length === 0){
        console.log("Name cannot be empty");
        return false;
    }
    if(pAge < 1 || pAge > 150){
        console.log("Not a valid age")
        return false;
    }
    return {pName,pAge};
}

console.log(makePerson('trevor', 45));

/// Little function from LinkedIn ///  What logs first start or end ///
setTimeout(function (){
    console.log("start")
},0);
console.log("end");
