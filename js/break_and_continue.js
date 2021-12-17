let random = Math.floor((Math.random()*50)+1);
do {
    console.log(random);
} while (random % 2 === 0);

console.log("Random Odd Number to skip is: " + random)

for (var i = 1; i <=100; i++) {

    if (i % 2 === 0) {

        continue;
    }if (random == i) {
        console.log("aye aye aye, Skip this number: " + i);
    } else {
        console.log("here is an odd number: " + i);
    }
    if (i >=49){
        break;
    }
}
