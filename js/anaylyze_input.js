//* here is a conditionals project for those who are done with the exercises:
// Create a file named analyze_input.js in the js directory.
// In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.
// Following are the rules of analysis:
// If the input is a number:
// Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
// Output if the number is negative, positive, or zero
// If the input is a string:
// If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one if/else. You must also make separate functions for each of the following pieces of program functionality:
// Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
// Determining if a number is odd or even. Re-use your Exercise 2 function for this.
// Determining if a number is <, >, or equal to zero
// Determining if the string is a single character or not
// Determining if the length 1 string is a vowel or not
// Add, commit, and push to GitHub.
//
var userKeyedInput = prompt("Please enter at least one keystroke in the box below.");

// Is keyed input a number or string or null
function analyzeUserPromptedInput(){
    if(!isNaN(userKeyedInput)){
        alert("You entered a number");
        isZero(userKeyedInput);
        isEvenOrOdd(userKeyedInput);
    }else if(isNaN(userKeyedInput)){
        alert("You entered someting other than a number");
        inputLength(userKeyedInput);
    }
}
analyzeUserPromptedInput()
// Is keyed input even or odd
function isEvenOrOdd(){
    if(userKeyedInput % 2 === 0){
        alert("You entered an even number");
    }else {
        alert("You entered an odd number.");
    }
}
//Is the keyed in put zero, positive or negative

function isZero(){
    if(userKeyedInput > 0){
        alert("You entered a positive number");
    }else if(userKeyedInput < 0){
        alert("You entered a negative number")
    }else {
        alert("You entered zero");
    }

}
// determines length if input is string
function inputLength (){
    if(userKeyedInput.length === 1){
        isAVowel(userKeyedInput);
    }else {
        howManyCharInputs(userKeyedInput);
    }
}
// determines is a single input is a vowel or consonant
function isAVowel(){
    switch (userKeyedInput) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            alert("You entered a single character and its a vowel");
            break;
        default:
            alert("You entered a single character and its a consonant.");
    }
}
// outputs length of string if more than one character
function howManyCharInputs (){
    alert("You entered " + userKeyedInput.length + " characters.");
}




