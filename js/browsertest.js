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
