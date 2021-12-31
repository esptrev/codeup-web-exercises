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

let promptedInput = prompt("Please enter at least one character into the box");

function isInputANumber (){
    if(parseInt(promptedInput) === NaN){
        if(promptedInput.length > 1){
            alert("You entered " + promptedInput.length + "characters.");
        }else if(vowels.includes(promptedInput)){
            const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
            alert("You entered a vowel")
        }else{
            alert("You entered a consonant.");
        }
    }
}