'use strict';

let numArr = [1,2,3,4,5,6,7,8,9];
let reducer = (a,b) => a + b;
console.log(numArr.reduce(reducer));


// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
//     Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Here are some test cases:
//     console.log(getSum(0, -1)); //Expected -1
// console.log(getSum(2, 2)); //Expected 2
// console.log(getSum(1, 5)); //Expected 15
// :fire:
//     3

function divisors(int){
    let intSqrt = Math.sqrt(int);
    console.log(intSqrt);
    for (let i = 1; i < intSqrt ; i++) {
        if(int % i === 0){
            console.log("Integer is not prime");
            break;
        }else{
            console.log(int + " is a prime number");
        }
    }
}
divisors(3);
