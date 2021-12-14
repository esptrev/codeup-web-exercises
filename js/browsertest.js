isEven(2)                   // true
isEven(-8)                  // true
isEven(0)                   // true
isEven("42")                // true
isEven(1)                   // false
isEven("-3")                // false
isEven(false)               // false
isEven("banana")            // false

function isEven(input){
    console.log(input.toString() % 2 === 0);
}
