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