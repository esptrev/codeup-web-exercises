"use strict";

console.log('Hello from External JavaScript!');
alert("Welcome to my Website!");

var response = prompt("Whats your favorite color?");
if (response === "blue"){
    alert("Awesome, thats my favorite color too!");

}else{
    alert(response + " is a nice color.");
}



/*
    Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about
the real operations to get the values, the goal of these exercises is to understand how real world conditions can
be represented with code. You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a
movie per day is $3, how much will you have to pay?
*/
//LM = 3 days
// BB = 5 days
//Herc = 1 day
// PPD = 3
// total = (lm + bb + hc)* ppd

var littleMermaid = prompt("How many days did you have 'Little Mermaid' out on rental?");
alert("You entered: " + littleMermaid);
console.log(littleMermaid);

var brotherBear = prompt("How many days did you have 'Brother Bear' out for rental?");
alert("You entered: " + brotherBear);
console.log(brotherBear);

var hercules = prompt("How many days did you have 'Hercules' out for rental?");
alert("You entered: " + hercules);
console.log(hercules);

var pricePerDay = 3;

var totalRentalFees = (littleMermaid * pricePerDay + brotherBear * pricePerDay + hercules * pricePerDay);
console.log(totalRentalFees);
alert("Your total rental fees are $" + totalRentalFees);





/*   Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this
week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/
//google is 400ph
//amazon is 380ph
//facebook is 350ph
//google time is 6
//amazaon time is 4
//facebook time is 10

var faceBookTimeSheet = prompt("How many hour did you work for FB this week?");
alert("You entered: " + faceBookTimeSheet);
console.log(faceBookTimeSheet);

var amazonTimeSheet = prompt("How many hours did you work for AZ this week?");
alert("You entered: " + amazonTimeSheet);
console.log(amazonTimeSheet);

var googleTimeSheet = prompt("How many hours did you work for Google this week?");
alert("You entered: " + googleTimeSheet);
console.log(googleTimeSheet);

let fbHourly = 350
let azHourly = 380;
let ggHourly = 400

var takeHomePay = (faceBookTimeSheet * fbHourly) + (googleTimeSheet * ggHourly) + (amazonTimeSheet * azHourly);
console.log("Your gross income for the week is $" + takeHomePay);
alert("Your gross income for the week is $" + takeHomePay);



 /*   A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
her current schedule.
*/
// class full = false
// class time slot = false
// class students < class full
// max class students 100
// schedule must be open

// let maxClass = 100;
// let classEnrollment = 10;
// let scheduleOpen = true;

var maxClass = prompt("How many students are currently enrolled in Web Developer course?");
var scheduleOpen = prompt("Are you currently registered for another class at this time?");

// id like to get an alert after both prompts where the else statment kicks them out.  Loops?

    // if(maxClass <= 100){
    //     alert("Web Devolopoer class is still open for enrollment");
    // }else {
    //     alert("We're sorry but this class is currently closed to enrollment.  Please select another time or check back.");
// }
//
//     if (scheduleOpen === "no"){
//         alert("You've been added to the roster");
//     }else{
//         alert("Please pick another class time to register for.")
// }
if (maxClass <= 100 && scheduleOpen === "no") {
    alert("Congratulations you've successfully register for Web Dev 101 @ 9 am M-F!");
} else {
    alert("We're sorry but we could not complete your registration at this time. Please contact admissions if you need special assistance.")
}


 /*   A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.
*/
// let basicMembership = "b";
// let premiumMembership = "p";
// var qP = (x >= 2);
// var x = 5;

var membershipLevel = prompt("Are you still a premium member?");
if (membershipLevel === "yes"){
    alert("Thats great, we really appreciate you patronage");
}else{
    alert("Please consider upgrading your membership level!");
}
console.log(membershipLevel);

var quantityPurchased = prompt("How many sale items did you add to your cart?")
if (quantityPurchased <= 2){
    alert("If you're not a premium member, you'll have to purchase more to qualify for special.");
} else{
     alert("You entered enough items to qualify for the discounted rate!");
}
let offerValid = true;
 //
 var applyOffer = ((membershipLevel || quantityPurchased) && offerValid)
 console.log(applyOffer);

if (membershipLevel === "yes" || quantityPurchased >= 2){
    alert("Offer has been applied to cart!");
} else { alert("We're sorry but this order doesn't qualify for the special.");

}








