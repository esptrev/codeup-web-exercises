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

function isFive (num){

    if (num === 5){
        return true;
} else if(num === "5") {
        parseInt(num);
        return true;
    } else {
    return false}
}
console.log(isFive(6));

function isMultipleOfThree(number) {
    console.log(number % 3 === 0);
}
isMultipleOfThree(12);
