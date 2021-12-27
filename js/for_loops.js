for (var i = 0; i <= 10; i++) {
    var multiplier = 7
    console.log('multiple of ' + i * (multiplier));
}


for (var i = 1; i < 11; i++) {
    console.log('Lucky number: ' + i + " is!?");
    var numberToStopAt = 10
    var randomNumber= Math.floor(Math.random() * 201);
    if (randomNumber % 2 === 0){
        console.log(randomNumber + "  This number is even!")
    }else {
        console.log(randomNumber + "  This number is odd.");
    }
    if (i === numberToStopAt) {
        console.log('Yo, pump those brakes!');
        break;
    }
}

// for (var i = 1; i < 10; i++){
//         let r = (i + " ").repeat(i)
//         console.log(r)
// }

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
//         if (num % i === 0) {
//             console.log(i);
//         }
//     }

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}
var primeArray = []
    // for(var i = 0; i < 230; i++){
    // if(isPrime(i)) console.count(console.log(i));
// }
for(var i = 0; i < 230; i++) {
    if (isPrime(i)) primeArray.push(i);
}
if(primeArray.length >=50){

}

console.log(primeArray.length);



