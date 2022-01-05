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


function add(num1,num2){
    return(num1 + num2);
}
console.log(add(5,5));
console.log(add(-8, 5));
console.log(add(-5, -3));

function square(numToSqr){
    return(numToSqr ** 2);  /* could also use Math.pow(x,y) to exponents */
}
console.log(square(5));

function sumOfSquares(int1,int2){
    var squaredInt1 = square(int1);  /*These extra lines may make code more readable */
    var squaredInt2 = square(int2);
    return add(squaredInt1, squaredInt2);
    // return(add(square(int1), square(int2)));  /* my original code */
}
console.log(sumOfSquares(2,2));

function sqRoot(num){
    return(Math.sqrt(num) ** 2);
}
console.log(Math.round(sqRoot(20)));

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

function getFizzBuzz(startingnum){  //Casey Code from Exercise
    if(startingnum % 3 === 0 && startingnum % 5 === 0){
        return("Fizz Buzz");
    }else if(startingnum % 3 === 0){
        console.log("fizz");
    }else if(startingnum % 5 === 0){
        console.log("buzz");
}
}
function tryGetFizzBuzz(input){
    let maybeFizzBuzz = getFizzBuzz(input);
    if(!!maybeFizzBuzz){
        console.log(maybeFizzBuzz)
    }
}
function runThatProgramThingy (){
    tryGetFizzBuzz(9);
    tryGetFizzBuzz(10);
    tryGetFizzBuzz(15);
}
runThatProgramThingy()

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
function itsOdd(runTimes){
    for(let i = 0; i <= runTimes; i++){
        if(i % 2 === 0){
            continue;
        }
        console.log("Here is an odd number: " + i + " .");
    }
}
itsOdd(10);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds
function forLoopEvenOrOdd(r){
    for( let i = 0; i <= r; i++){
        if(i % 2 === 0){
            console.log(i + " This is an even iteration.");
        }else {
            console.log(i + " This is an odd iteration");
        }
    }
}
forLoopEvenOrOdd(10)


// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

function enterTheCorrectPassword(){
    var correctPassWord = "codeup";
    for(let i = 1; i <= 3; ++i){
        var userEnteredPassword = prompt("Please enter your password in box below")
        if(userEnteredPassword === correctPassWord){
            alert("You will be logged in momentarily.");
            break;
        }else if(userEnteredPassword !== correctPassWord && i < 3){
            alert("Wrong password, please try again");
        }else {
            alert("You've entered wrong password too many times, login will be locked");
        }
    }
}
enterTheCorrectPassword();



