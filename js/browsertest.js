function anaylyzeInput() {
    let input = prompt("Please enter some characters.");
    console.log(typeof input)
    switch(input) {
        case typeof input == "number":
            if (input % 2 === 0){
                alert("You entered an even number.");
            }else{
                alert ("You entered an odd number.");
            }
            if (input > 0){
                alert("You entered a positive number");
            }else {
                alert ("You entered a negative number.");
            }
            break;
        case typeof input == "string":
            if (input.length === 1){
                const vowels = ['a' , 'e', 'i', 'o', 'u'];
                if(vowels.includes(input.toLowerCase())){
                    alert("You entered a vowel")
                }else {
                    alert('You entered a consonant')
                }
            }


    }

}

anaylyzeInput()
