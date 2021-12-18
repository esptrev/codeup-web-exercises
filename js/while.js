
//While loop

let i = 2
do {
    console.log(i);
     i = (i * 2);
}while (i < 65600);

// Do While loop

var conesSold = Math.floor(Math.random() * (100-50) + 50);
var conesIndividualPurchase = Math.floor(Math.random() * 5) + 1;
console.log(conesSold);
console.log(conesIndividualPurchase);

do {
    conesIndividualPurchase = Math.floor(Math.random() * 5) + 1;
    if (conesIndividualPurchase > conesSold) {
        console.log("I can only sell you: " + conesSold + " cones!");
    }else{
        console.log("I just sold: " + conesIndividualPurchase + " cones!");
        conesSold -= conesIndividualPurchase;
    }

}while (conesSold > 0 );
console.log("SOLD OUT")
