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

function anaylyzeInput(characters) {
    let input = prompt("Please enter some characters.");
    switch (input){
        case typeof input == "number";
        if(input % 2 === 0){
            return("You entered an even number.")
        }else{
            return ("You entered an odd number.");
        }
        if(input > 0){
            return ("You entered a positive number")
        }else {
            return ("You entered a negative number.")
        }
        break;
        case typeof input == "text";
        if(input.length > 1)git
    }

}

