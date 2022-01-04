
//While loop my iteration
function whileLoop(){
    let i = 2
    do {
        console.log(i);
        i = (i * 2);
    }while (i < 65600);
}
whileLoop()
console.log('End of my iteration')
//Doc Rob Iteration of While Loops to exponent
function docRobToThe3(){
    var power = 1;
    while(power <=16){
        console.log(Math.pow(2,power));
        power++
    }
}
docRobToThe3()
console.log("End of Doc Rob Loop");

// Do While loop
console.log('Start of Do While Loop')

var conesSold = Math.floor(Math.random() * (100-50) + 50);// generates the total number of cones that need to be sold
var conesIndividualPurchase = Math.floor(Math.random() * 5) + 1; //generates the sale of each transaction
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


/*Define a function named getPassword() which performs the following actions:
    Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
    HINT: start by defining the correct password and don't forget to link your html file     */
//My version of password function
console.log('Start of Password Loop');

var correctPassword = "DoWhileLoops";
var attempts = 0
function getPassword(){
    while (userEnteredPassword !== correctPassword && attempts < 3){
        ++attempts;
        var userEnteredPassword = prompt("Please enter your password");
        if(userEnteredPassword === correctPassword){
            alert("You will be logged in momentarily")
        }else if(userEnteredPassword !== correctPassword && attempts >= 3){
            alert("You've reached the maximum number of log in attempts, account will be locked for 30 minutes");
        }else{
            console.log("Please try again, password not valid")
        }
        ;
    }
}
getPassword()


function getBetterPassword2() {   //Doc Rob version of password function
    var answer = "howdy";
    var attempts = 0;
    var guess;
    do {
        guess = prompt("Enter your password: ");
        attempts++;
    } while(guess !== answer && attempts < 3);
    if(guess === answer) {
        alert("ok");
    } else {
        alert("not ok");
    }
}

/* B) getMeaningOfLife
Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
    This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
    While the counter is not equivalent to the meaningfulNum, continue the loop.
    Once that condition is broken, console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
    Write some code to account for this case. How the function handles the situation is up to you!
    Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"

 */
// var magicNumber = 45
// function getMeaningOfLife (meaningfulNum){
//     let counter = 0;
//     if(isNaN(meaningfulNum)){
//         console.log('Alas, life is but a number');
//     }else {
//         while (meaningfulNum !== counter){
//             console.log(counter);
//             if(counter === 42){
//                 console.log('Did you bring a towel, good sir');
//             }else if (counter === magicNumber){
//                 console.log('Looky, there, you spry devil, You have discovered the secret');
//             }
//             counter++;
//         }
//     }
// }
//    getMeaningOfLife