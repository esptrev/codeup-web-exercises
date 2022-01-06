
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['kristin', 'trevor', 'korbin', 'berry'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('Number of elements in the Names array ' + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++){
        console.log('The name at index ' + i + ' is:  ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('for each array');
    names.forEach(name => console.log(name));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let veggieArray = ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'];
    console.log(veggieArray);

    function indexFirst(){
        console.log(veggieArray[0]);
    }
    indexFirst()

    function indexSecond(){
        console.log(veggieArray[1]);
    }
    indexSecond()

    function indexLast(){
        var lastindexofarray = veggieArray.length -1; /*Doc Rob version of last*/
        console.log(veggieArray[lastindexofarray]);
        // console.log(veggieArray[veggieArray.length -1]); My version of last
    }
    indexLast()
    console.log('End of first Array exercise group');

    // Mini Exercise
    // -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
    // -Write a function that accepts an array as a parameter and...
    // -> logs the first, third, and last elements of that array
    // -Invoke your function and pass favoriteArtists as an argument


    let favoriteArtists = ['Cody Jinx', 'Gary Allan', 'Aaron Lewis','George Strait', 'Randy Rogers'];
    function whoIsOnFirst(arrayInput){
        console.log(arrayInput[0]);
        console.log(arrayInput[2]);
        console.log(arrayInput[arrayInput.length -1]);
    }
    whoIsOnFirst(favoriteArtists);
