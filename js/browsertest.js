let arr = [1,2,3,4,5,6,7];
console.log(arr);

// let sortarr = arr.sort((a,b)=>a-b);
// let newSortArr = sortarr.slice(0,4);
// console.log(sortarr);
// console.log(newSortArr);
// console.log("------------------------------")
// let revsortarr = sortarr.reverse();
// let newRevSortArr = revsortarr.slice(0,4);
// console.log(revsortarr);
// console.log(newRevSortArr);
// let sum1 = 0;
// for (let i = 0; i < newRevSortArr.length; i++) {
//    sum1 += newRevSortArr[i];
//     console.log(sum1);
//
//     let sum2 = 0;
//     for (let j = 0; j < newSortArr.length; j++) {
//         sum2 += newSortArr[i];
//         console.log(sum2);
//
//
//     }
// }

// function miniMaxSum(arr) {
//     let sortarr = arr.sort((a, b) => a - b);
//     let newSortArr = sortarr.slice(0, 4);
//     let revsortarr = sortarr.reverse();
//     let newRevSortArr = revsortarr.slice(0, 4);
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < newRevSortArr.length; i++) {
//         sum1 += newRevSortArr[i];
//     }
//         for (let j = 0; j < newSortArr.length; j++) {
//             sum2 += newSortArr[j];
//         }
//     return sum2.toString() + " " + sum1.toString();
//
// }
//
// console.log(miniMaxSum(arr));

function miniMaxSum(arr) {
    // Write your code here
    var sum = arr.sort().reduce((a, b) => a + b, 0);
    console.log(sum);
    console.log(sum-arr[arr.length-1], sum-arr[0])
}
miniMaxSum(arr);

function timeConversion(s) {
    return moment(s,'h:mm:ss A').format('HH:mm:ss');
}


