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

for (var i = 1; i < 10; i++){
        let r = (i + " ").repeat(i)
        console.log(r)
}

for (var i = 100; i > 0; i -= 5){
        console.log(i);
}




