// var sample = "Hello CodeUp";
// console.log(sample.length);
// console.log(sample.toUpperCase());
// console.log(sample.toLowerCase());
// var sample = sample + " Students!";
// console.log(sample);
// console.log(sample.replace('Students!' , 'Class!'));
// console.log(sample.indexOf("C"));
// console.log(sample.substr(sample.indexOf("C"), + 6)); //use substring alt sample.indexOf("P"), + 1


//LM = 3 days
// BB = 5 days
//Herc = 1 day
// PPD = 3
// total = (lm + bb + hc)* ppd

// let littleMermaid = 3;
// let brotherBear = 5;
// let hercules = 1
// let pricePerDay = 3
// var totalRentalFees = (littleMermaid + brotherBear + hercules) * pricePerDay;
// console.log(totalRentalFees);

//google is 400ph
//amazon is 380ph
//facebook is 350ph
//google time is 6
//amazaon time is 4
//facebook time is 10
// let faceBookTimeSheet = 10;
// let amazonTimeSheet = 4;
// let googleTimeSheet = 6
// let fbHourly = 350
// let azHourly = 380;
// let ggHourly = 400
// var takeHomePay = (faceBookTimeSheet * fbHourly) + (googleTimeSheet * ggHourly) + (amazonTimeSheet * azHourly);
// console.log("Your gross income for the week is " + takeHomePay);

// class full = false
// class time slot = false
// class students < class full
// max class students 100
// schedule must be open
// let maxClass = 100;
// let classEnrollment = 10;
// let scheduleOpen = true;
// if ((classEnrollment < maxClass) && scheduleOpen) {
//     console.log("Congratulations you've are now registered!");
// } else {
//     console.log("We're sorry but we could not regiester you for this class")
// }

//console.log(allowedToRegister);  go back and add another else if for class is open but schedule is full


//must buy 2 or more
//discount date has to be valid
//premium nembers exempt
// this is really an if else solution

// let basicMembership = "b";
// let premiumMembership = "p";
// var qP = (x >= 2);
// var x = 5;

let membershipLevel = false;
let quantityPurchased = false;
let offerValid = false;

var applyOffer = ((membershipLevel || quantityPurchased) && offerValid)
console.log(applyOffer);

if ((membershipLevel || quantityPurchased) && offerValid){
    console.log("Offer has been applied to cart!");
}else{
    console.log("We're sorry but that offer is no longer valid");
}


// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

// var username = 'codeup';
// var password = 'notastrongpassword';
// var password = password.trim(); //trims whsp but doesn't prevent it,  sbould be if/else to end code
// var username = username.trim();
// console.log(password);
// console.log(username);
// var passLength = password.length;
// var noUserInPass = (password.indexOf(username) === -1); //keeps full username out of password, need multiple indexof to elimnate portions there of
// console.log(noUserInPass);
// console.log(passLength);
// var userLength = username.length;
// console.log(userLength);
// var validPassword = (passLength >= 5 && userLength <= 20 && noUserInPass  );
// console.log(validPassword);














