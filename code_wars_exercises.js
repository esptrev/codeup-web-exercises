//Convert Decimal to Binary then add, output should be string
//Converts to Binary
function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
}
console.log(decimalToBinary());
//Adds binary
function addBinary(a,b) {
    return decimalToBinary(a+b);
}
console.log(addBinary(1,2));
console.log(typeof addBinary());

//Split the Digits then Square then and concatenate, return integer

function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}

//Accumulating characters Code should print out characters based on position in the string.
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum('kdjdj'));

function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
        var row = '';
        for(var j = 0; j < i + 1; j++) {
            row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}
console.log(accum('fgtyh'));


