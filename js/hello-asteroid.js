//console.log("Node is working");
// "hello world!"
// 'hello world'
// 'hello isn\'t a world'
// console.log('hello, this isn\'t a world');
// console.log("I love hamburgers " + "with bacon, jalapenos, " + "mustard, mayo and lettuce. " + "I can do without the tomatoes and onions!");
// console.log('this stuff is crazy cool');
// var favoritefood = "\nanything breakfast!";
// console.log("my favorite food is " + favoritefood + "!");
// favoritefood = "double quarter pounder \t with cheese from Mickey D's!";
// console.log("ok, change of plans. I'm jones'n for " + favoritefood);
let phrase1 = "I'm really jones'n for a \n";
// console.log(phrase1 + favoritefood);

//console.log(phrase1.toUpperCase())
//console.log(phrase1);
//phrase1.big()
//console.log(phrase1);

// let subphrase = phrase1.substr(4, 17);
// console.log(subphrase);
//
// console.log(subphrase.charCodeAt(subphrase.length -1));

// let greeting = "Hello, ";
// greeting += "Clarice";
//console.log(greeting);
// greeting += ".....";
// console.log(greeting);

// console.log(1 + 2); //added a number to another number
// numbers can be integer, floating point, infinity except big Int
// console.log(1 + 3.14);
// console.log(typeof (1 + 3.14));
//
//Parenthese, exponents, multiply/divide, add/subract Order of ops



// let myexpression = (10 * 2 / 5) - 2**2;
//console.log(myexpression);

// console.log(1 / myexpression); //oof
// let num1 = 22;
// console.log(num1++);//post increment will output orignal number
// console.log(num1);//will output a new number with increment
// console.log(++num1); //pre increment, will post original plus the increment



let numStr = "7.99"; //numerical string
let discount = .10;  //number  Cannot multiply the two without parsing
let numAmount = parseFloat(numStr);
let discountedTotal = numAmount - (numAmount * discount);
console.log(discountedTotal);


let userAge = "12";
let hopefullyaNumber = parseInt(userAge);
if (hopefullyaNumber){
    console.log("Your age is: " + userAge);
}else {
    console.log("That is not a valid age. Please try again!");
}












