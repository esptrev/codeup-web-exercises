function countingAString (characterinput) {
    if (typeof (characterinput) === "string"){
        return(characterinput.length);
    }
    return false;
}
console.log(countingAString("My brain is on FIRE!"));



