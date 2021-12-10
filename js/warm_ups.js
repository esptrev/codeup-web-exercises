//auto loan
//credit score > 680 && cash on hand 4000
// || cash on hand 10000
let cashOnHand = 10000;
let creditScore = 590;

var loanApproved = ((cashOnHand >= 4000 && creditScore >= 680) || (cashOnHand >= 10000 && creditScore <= 680))
console.log(loanApproved)

 if ((cashOnHand >= 4000 && creditScore >= 680) || (cashOnHand >= 10000 && creditScore <= 680)) {
    console.log("Congratulation your loan has been preapproved!");

} else{
    console.log("Sorry we cannot approve loan at this time");
}


//redo with if/else/if else/  with that credit score you will need more of a down paymnt
//console.log(loanApproved)
