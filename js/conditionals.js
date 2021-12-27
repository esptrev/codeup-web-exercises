"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(string) {
    if (colorString === 'blue') {
        console.log("Wow! Blue is my favorite color!");
    } else if (colorString === 'green') {
        console.log("I sure wish my grass was still green.");
    } else if (colorString === 'yellow') {
        console.log("I think yellow cars are cool!");
    } else if (colorString === 'red') {
        console.log("Stop signs are red.");
    } else if (colorString === 'orange') {
        console.log("The sun looks orange.");
    } else {
        console.log("I cant think of anything that color?!");
    }
}

var colorString = 'brown';
analyzeColor()


function analyzeColor() {
    if (colorString === 'blue') {
        return ("Wow! Blue is my favorite color!");
    }
    if (colorString === 'green') {
        return ("I sure wish my grass was still green.");
    }
    if (colorString === 'yellow') {
        return ("I think yellow cars are cool!");
    }
    if (colorString === 'red') {
        return ("Stop signs are red.");
    }
    if (colorString === 'orange') {
        return ("The sun looks orange.");
    }
    return ("I cant think of anything that color?!");

}

var colorString = 'blue';
console.log(analyzeColor(colorString));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */


// function analyzeColor() {
//     colors = colors.toLowerCase;
//     if (colorString === 'blue') {
//         console.log("Wow! Blue is my favorite color!");
//     } else if (colorString === 'green') {
//         console.log("I sure wish my grass was still green.");
//     } else if (colorString === 'yellow') {
//         console.log("I think yellow cars are cool!");
//     } else if (colorString === 'red') {
//         console.log("Stop signs are red.");
//     } else if (colorString === 'orange') {
//         console.log("The sun looks orange.");
//     } else {
//         console.log("I cant think of anything that color?!");
//     }
// }
//
// var colorString = randomColor;
// analyzeColor()
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// switch (randomColor) {
//     case "blue":
//         console.log(randomColor + " is my favorite color!");
//         break;
//     case "red":
//         console.log("Roses are red.");
//         break;
//     case "orange":
//         console.log("The sun is kinda orange.");
//         break;
//     case "yellow":
//         console.log("Daisies can be yellow!");
//         break;
//     case "green":
//         console.log("The color of Money!");
//         break;
//     default:
//         console.log("Can't think of anything " + randomColor + " at the moment?!");
//         break;
// }
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
// var favoriteColor = prompt("Whats your favorite color?")
// favoriteColor = favoriteColor.toLowerCase()
// switch (favoriteColor) {
//     case "blue":
//         console.log(favoriteColor + " my favorite color!");
//         alert(favoriteColor + " is my favorite color!");
//         break;
//     case "red":
//         console.log("Roses are red.");
//         alert("Roses are red.");
//         break;
//     case "orange":
//         console.log("The sun is kinda orange.");
//         alert("The sun is kinda orange.");
//         break;
//     case "yellow":
//         console.log("Daisies can be yellow!");
//         alert("Daisies can be yellow!");
//         break;
//     case "green":
//         console.log("The color of Money!");
//         alert("The color of Money!");
//         break;
//     default:
//         console.log("Can't think of anything " + favoriteColor + " at the moment?!");
//         alert("Can't think of anything " + favoriteColor + " at the moment?!");
//         break;
//
//
//         /* ########################################################################## */
//
//         /*
//          * TODO:
//          * Suppose there's a promotion in Walmart, each customer is given a randomly
//          * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//          * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//          * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//          * everything for free!.
//          *
//          * Write a function named `calculateTotal` which accepts a lucky number and total
//          * amount, and returns the discounted price.
//          *
//          * Example:
//          * calculateTotal(0, 100) // returns 100
//          * calculateTotal(4, 100) // returns 50
//          * calculateTotal(5, 100) // returns 0
//          *
//          * Test your function by passing it various values and checking for the expected
//          * return value.
//          */
//         var yourLuckyNumber = 4
//         var total = 100
//
//     function calculateTotal(yourLuckyNumber, total) {
//         if (yourLuckyNumber === 1) {
//             return (discount = .10);
//         } else if (yourLuckyNumber === 2) {
//             return (discount = .25);
//         } else if (yourLuckyNumber === 3) {
//             return (discount = .35);
//         } else if (yourLuckyNumber === 4) {
//             return (discount = .5);
//         } else if (yourLuckyNumber === 5) {
//             return (discount = 1);
//         } else {
//             return (discount = 0);
//         }
//     }
//
//         console.log(calculateTotal(4, 100))
//         var discountAmount = (total * discount);
//         console.log(discountAmount);
//         var discountedTotal = (total - discountAmount);
//         console.log(discountedTotal);
//
//
//         /**
//          * TODO:
//          * Uncomment the line below to generate a random number between 0 and 5.
//          * (In this line of code, 0 is inclusive, and 6 is exclusive)
//          * Prompt the user for their total bill, then use your `calculateTotal` function
//          * and alerts to display to the user what their lucky number was, what their
//          * price before the discount was, and what their price after the discount is.
//          */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
//         var yourLuckyNumber = Math.floor(Math.random() * 6);
//
//         console.log(yourLuckyNumber);
//
//         alert("Your Lucky Number is: " + yourLuckyNumber);
//
//         var total = parseFloat(prompt("What was your total bill?"));
//
//
//         switch (yourLuckyNumber) {
//             case 0:
//                 alert("We're sorry but 0 is not a winning number. Please come again.");
//                 break;
//             case 1:
//                 alert("Congratulations your discount is 10%!");
//                 alert("Your new total is :$ " + (total - total * .10));
//                 break;
//             case 2:
//                 alert("Congratulations your discount is 25%!");
//                 alert("Your new total is: $ " + (total - total * .25));
//                 break;
//             case 3:
//                 alert("Congratulations your discount is 35%!");
//                 alert("Your new total is: $ " + (total - total * .35));
//                 break;
//             case 4:
//                 alert("Congratulations your discount is 50%!");
//                 alert("Your new total is: $ " + (total - total * .5));
//                 break;
//             case 5:
//                 alert("Congratulations your discount is 100%!");
//                 alert("Your new total is: $ " + (total - total));
//                 break;
//         }
//
//
//     /**
//      * TODO:
//      * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//      * would like to enter a number. If they click 'Ok', prompt the user for a
//      * number, then use 3 separate alerts to tell the user:
//      *
//      * - whether the number is even or odd
//      * - what the number plus 100 is
//      * - if the number is negative or positive
//      *
//      * Do *NOT* display any of the above information
//      * if the user enters a value that is not of the number data type.
//      * Instead, use an alert to inform them of the incorrect input data type.
//      *
//      *
//      * Can you refactor your code to use functions?
//      * HINT: The way we prompt for a value could be improved
//      */
//
//
//
//     function userEntersNumber() {
//
//         if (confirm("Would you like to enter a number?!") == true) {
//             alert("You pressed OK!");
//             var userInput = prompt("Please enter your Number.");
//
//         } else {
//             alert("Have a good day, Goodbye.");
//             return;
//         }
//         if (userInput > 0) {
//             alert("Your Number is Positive");
//         } else {
//             alert("Your Number is Negative.");
//         }
//         if (userInput % 2 === 0) {
//             alert("Your number is Even!");
//         } else {
//             alert("Your number is ODD!");
//         }
//         alert((parseInt(userInput) + 100));
//     }}
//
//         userEntersNumber();
//



// ### IF / ELSE IF / ELSE
//
// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
//     It will accept 4 arguments and the parameter names are:
//
//     - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
let riderAge = 17;
let isInsured = 'no';
let hasCar = 'no';
let canGetRideShare = 'no';
// ---
//     1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
//     This `getToDestination` should not return any value, but rather console log based on the conditions met.
function getToDestination(){
    if(riderAge >= 16 && isInsured === "yes" && hasCar === "yes"){
        console.log("Drive safe and have a good time!");
    }else if ((riderAge <= 16 || isInsured === "no" || hasCar === "no") && canGetRideShare === 'yes'){
        console.log("Please schedule a ride share or co-op.");
    }else{
        console.log("Maybe you should try calling a friend for a ride.  Make sure to chip in for gas");
    }
}
getToDestination();
//
// ---
//
// #### getToDestination, part 2
//
// - Create a function called canGetRideshare() which will *RETURN* a boolean
// - It will determine if there are drivers nearby and the person has enough money for the ride
// - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// - Be sure to log to the user if they can or cannot get a rideshare
function canGetRideShare(){

}


//
// BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// - Consider this: What if mileage determined:
//     - If the rider has enough funds?
//     - If there is a driver close enough to service the rider?
//
//     ---
// ### SWITCH STATEMENTS
//
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
// - This will involve multiple switch statements and functions
// - Orchestrate the statements in a central function that is responsible for calling and checking for errors
//     each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//     ie: `function getBodyStyle(input){return input}`
//
//
//     - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
//     - The user should be able to enter their
//     - Body style (2D, 4D, etc)
//     - Vehicle type (sports car, sedan, compact, truck, etc)
//     - Vehicle color
//
//
//     - Each switch statement should confirm the user's choice in a logging statement
//
//
//     - The point of this is to validate what the user enters.
//     - If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//         ie: default: `"error: " + vehicleType + " not recognized"`;
//         - If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//         - HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
//         - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
//
//
