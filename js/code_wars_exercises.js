//Convert Decimal to Binary then add, output should be string
//Converts to Binary
function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
}
console.log(decimalToBinary());
//Adds binary
function addBinary(a,b) {
    return decimalToBinary(a+b);
}
console.log(addBinary(1,2));
console.log(typeof addBinary());

//Split the Digits then Square then and concatenate, return integer

function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}

//Accumulating characters Code should print out characters based on position in the string.
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum('kdjdj'));

function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
        var row = '';
        for(var j = 0; j < i + 1; j++) {
            row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}
console.log(accum('fgtyh'));

//Code from Raymond on objects
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }
// Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.

// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: | Output: 13

function sum(sequence){
    let total = 0;
    for (let i = 0; i < sequence.length; i++) {
        total += sequence[i];
    }
    console.log(total);
}
sum([1,2,3,4]);

/* Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).
*/

function findSubString(string){
    let partial = 'english';
   return !!string.toLowerCase().includes(partial);

}
console.log(findSubString("SMFENgliSHasnD"));
// findSubString("");
let scores =[10,5,20,20,4,5,2,25,1]
function breakingRecords(scores) {
    let maxCount = 0;
    let minCount = 0;
    let maxScore = scores[0]
    let minScore = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        } else if(maxScore < scores[i]) {
            maxScore = scores[i];
            maxCount++;
        }
    }
    return [maxCount,minCount];

}
console.log(breakingRecords(scores));

/* mission: split or combine strings base one first/second characters of string
 S = split, C = combine  second code  M = method , V = variable, C = class
 in the case of split operation the input will be camelCased and need to be split into
 space delimited list of words all lower cased
 in the combine operation inputs will be a space delimited set of words all lower cased that must be combined
 into appropriate camelCased string. Strings with M need to end with empty parenthesis strings with C need to have
 first letter of every word capitalized
 */

function splitInput(input){
    if (input.charAt(0) === "S"){
        for (let i = 4; i < input.length; i++) {
            if(input.charAt(i)  === input.charAt(i).toUpperCase()) {
                let spacedInput = (input.replace(input.charAt(i), " " + input.charAt(i))).toLowerCase();
                console.log(spacedInput);
            }
        }

    }else {
        let deleted = input.replaceAll(" ","X");
        for (let i = 0; i < deleted.length; i++) {
            if(this.charAt(i) === "X"){
                deleted = deleted.replace(.charAt(i + 1). )
            }
        }

            }




    }


console.log(splitInput("S;M;plasticCup"));
console.log(splitInput("C;M;white sheet of paper"));

// function splitInput(string){
//     let split = string.split(';')
//     console.log(split)
//     let actualString = split[2].toString()
//     console.log(actualString)
//     if (split[0] === 'S'){
//         let letterIndex = []
//         actualString.split('').forEach(function (letter, i){
//             if(letter === letter.toUpperCase()) {
//                 letterIndex.push(i)
//             }
//         })
//         console.log(letterIndex)
//     }
//
// }
// splitInput('S;M;plasticCup') Raymonds stab at it try to expand










// Remove all ! from string then add one to end
function remove (string) {
    let strArr = string.split('')
    const vToRemove = '!';
    const results = strArr.filter(function (x){
        return  x !== vToRemove;
    })
    let finished = results.join('') + '!';
    console.log(finished);
}
remove('!!!hi!!');

// Take full name and return just initials

function abbreviate (string){
    let strRay = string.split('')
    let initials = []
    initials.push(strRay[0]);
    let indSpace = strRay[strRay.indexOf(' ') + 1];
    initials.push(indSpace);
    let final = initials.join('');
    return (final.toUpperCase());

}
abbreviate('trevo esparza')

//Function to return Boolean if number is prime
function isPrime(num){
    if(num < 2){
        return false;
    }
    if(num === 2){
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
}






// Function loneRanger, remove the element that occurs only once in the array
let array = [12,1,12,3,12,1,1,2,3,3];
function loneRanger(input){
    for (let i = 0; i < input.length; i++) {
        if(input.indexOf(input[i]) === input.lastIndexOf(input[i])){
            return input[i];
        }

    }
}
console.log(loneRanger(array));



// Find integers divisors
function divisors(integer) {
    let divArr = [];
    for(let i = 2; i < integer; i++){
        if(integer % i === 0){
            divArr.push(i);
        }

    }
    if(divArr.length === 0){
        return integer + " is prime";
    }
    return divArr;
}
console.log(divisors(15));    /*   [3, 5]  */
console.log(divisors(12));      /* [2, 3, 4, 6]*/
console.log(divisors(13));     /*  ( "13 is prime")*/

//Remove the last !
function remove (string) {
    if(string.charAt(string.length -1) === '!'){
        return string.slice(0,-1);
    }
    return string;
}
console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi!"));
console.log(remove("Hi"));
console.log(remove("Hi! Hi!"));
console.log(remove("!Hi"));

// doTest("Hi!!!", "Hi!!");
// doTest("!Hi", "!Hi");
// doTest("!Hi!", "!Hi");
// doTest("Hi! Hi!", "Hi! Hi");
// doTest("Hi", "Hi");

//Find sum of divisors 3/5
function solution(number){
    let sumOfDivisors = 0;
    if(number < 0){
        return 0;
    }else{
        for(i=3;i<number;i++){
            if(i % 3 === 0 || i % 5 === 0){
                sumOfDivisors += i;
            }
        }
        return sumOfDivisors;
    }
}

console.log(solution(15));