'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
////languages with foreach////
let multiLingual1 = [];
users.forEach(function (user){
    if(user.languages.length >= 3){
        multiLingual1.push(user.name, user.languages);
    }
})
////languages with filter////
console.log(multiLingual1,'foreachloop');
let multiLingual2 = users.filter(function (user){
    return user.languages.length >= 3;
})
console.log(multiLingual2,'filterfunction');


/////email array with map/////
let multiLingual0 = users.map(user => user.email);
console.log(multiLingual0, 'herehere');

////sum of total years experience with reduce/////
let yearsOfExperience = users.reduce((totalYearsOfExperience, user) =>{
    return totalYearsOfExperience + user.yearsOfExperience;
}, 0);
console.log(yearsOfExperience, 'maybenot');

////ave of the sum using reduce////////

let avgYearsOfExperience = users.reduce((totalYearsOfExperience, user) =>{
    let numOfUsers = users.length;
    return  yearsOfExperience/numOfUsers;
}, 0);

console.log(users.length);
console.log(avgYearsOfExperience,'ttt');

/////email array of strings with for each/////
let emailString1 = [];
users.forEach(function(user){
    emailString1.push(user.email);
})
////for each with arrow function/////
let emailString0 = [];
users.forEach((user)=> emailString0.push(user.email));
console.log(emailString0);

////email array with map/////
let emailArray = users.map(function (user){
    return user.email;
})
console.log(emailArray, 'email using map');

/////longest email addy using reduce and ternary/////
let longestEmailAddy = emailString1.reduce((a,b)=> b.length <= a.length ? a:b);
console.log(longestEmailAddy);

/////reduce to get string of users names/////
let instructorArray = users.map(function (user){
    return user.name;
})
console.log(instructorArray);

const instructorString = instructorArray.reduce( (prev, curr) => prev +', '+ curr );
console.log("Your instructors are: " + instructorString);

///////BONUS UNIQUE LANGUAGES//////
let languagesUsed = users.map(function (user){
    return user.languages;
})
console.log(languagesUsed);
let flatendLanguageArray = languagesUsed.flat();
console.log(flatendLanguageArray);

const uniqueLanguageArray = (array) => {
    return Array.from(
        array.reduce((set, e) => set.add(e), new Set())
    )
}
console.log(uniqueLanguageArray(flatendLanguageArray));





// let uniqueLanguageArray = [...new Set(flatendLanguageArray)];
// console.log(uniqueLanguageArray);

// const uniqueLanguageArray= (flatendLanguageArray) => {
//     return flatendLanguageArray.reduce((pre, cur) => {
//         if (pre.includes(cur)) return pre;
//         return [...pre, cur]
//     }, [])
// }

