

function userEntersNumber() {

    if (confirm("Would you like to enter a number?!") == true) {
        alert("You pressed OK!");
        var userInput = prompt("Please enter your Number.");

    } else {
        alert("Have a good day, Goodbye.");
        return;
    }
    if(userInput > 0 ) {
        alert("Your Number is Positive");
    }else{
        alert("Your Number is Negative.");
    }
    if(userInput % 2 === 0){
        alert("Your number is Even!");
    }
    else {
        alert("Your number is ODD!");
    }
    alert((parseInt(userInput) + 100));
}
userEntersNumber()

