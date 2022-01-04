
// Break and Continue 1-3

function brkAndCont() {
    do {
        var random = prompt("Please enter an odd number between 1 & 50!")
        console.log(random);
        if (random % 2 === 0 || isNaN(random)) {
            alert("That's not an odd number, please try again");
        }
    } while (parseInt(random) % 2 === 0 || isNaN(random) || random > 50)
    {

    }
    console.log("Random Odd Number to skip is: " + random)

    for (var i = 1; i <= 100; i++) {

        if (i % 2 === 0) {
            continue;
        }
        if (parseInt(random) === i) {
            console.log("aye aye aye, Skip this number: " + i);
        } else {
            console.log("here is an odd number: " + i);
        }
        if (i >= 49) {
            break;
        }
    }
}
brkAndCont()
