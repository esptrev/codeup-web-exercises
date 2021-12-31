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


