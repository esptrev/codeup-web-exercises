let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
//1,1,3
 console.log(a)


let d = "hello";
let e = false;
d++;
e++;
console.log(d);

var perplexed = 5; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);


var price = 2.7;
price.toFixed(2);
console.log(price);

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));



console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
NaN == NaN