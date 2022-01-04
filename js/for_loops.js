//Show multiplication table

function multiTable(){
    for (let i = 1; i <= 10; i++) {
        var multiplier = 7
        console.log(multiplier + "*" + i + "=" +  (multiplier * i));
    }
}
multiTable()
console.log('End of Mulitplier Table');

//Ten random numbers from 10-200 My iteration
var randomNumber = 0;
function randomNumbs(){
    for (var i = 1; i < 11; i++) {
        randomNumber= Math.floor(Math.random() * 180) + 20;
        console.log('Lucky number ' + i + " is: " + randomNumber + " ?!?");
        var numberToStopAt = 10

        if (randomNumber % 2 === 0){
            console.log("  This number is even!");
        }else {
            console.log("This number is odd.");
        }
        if (i === numberToStopAt) {
            console.log('Yo, pump those brakes!');
            break;
        }
    }
}
randomNumbs();
console.log('End of random Numb loop');

/*Instructor Ry iteration of random even/Odd numbers*/
function randomOddOrEven(){
    for(let i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 180) +20;
        if(randomNumber % 2 === 0){
            console.log(`${randomNumber} is even`);
        }else {
            console.log(`${randomNumber} is odd`);
        }

    }
}
randomOddOrEven();
console.log('End of Instructor Ry loop');


// Exercise 4/For Loops Number Pyramid

function numberPyramid (){
    for (var i = 1; i < 10; i++){
        let r = (i + " ").repeat(i)
        console.log(r)
    }
}
numberPyramid()
console.log('End of Pyramid Loop')

// Exercise #5 For Loops Countdown from 100 by 5
function countDown(){
    for(let i = 100; i > 0; i -= 5)
        console.log(i)
}
countDown()
console.log('End of Countdown Loop');

// Prime Number exercise from Slack--First attempt, gave me some unprime numbers
// for (var i = 1; i < 100; i += 1){
//     if ( i <= 3){
//     }
//     if (i % 2 === 0){
//         continue;
//     }
//     if (i % 3 === 0){
//         continue;
//     }
//     if(i % 5 === 0){
//         continue;
//     }
//         console.log(i);
// }
// function number(){}
//     for (var i = 2; i <= 100; i++) {
//         if (number % i === 0) {
//             console.log(i);
//         }
//     }
// second crack at the prime function below, pushed all numbers to array

// var primeArray = []
//     for(var i = 0; i < 230; i++){
//     if(isPrime(i)) console.count(console.log(i));
// }
// for(var i = 0; i < 230; i++) {
//     if (isPrime(i)) primeArray.push(i);
// }
// if(primeArray.length >=50){
//
// }
//
// console.log(primeArray.length);

// Prime Numbers 3rd attempt/ Works/ Talked to Raymond to solve all of I going into array
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}
let primeArray = []
let primeCount = 0;
while (primeArray.length < 50){
    if(isPrime(primeCount) === true){
        console.log(primeCount);
        primeArray.push(isPrime())
    }
    primeCount++
}
console.log(primeArray.length);
console.log('End of Prime function');




