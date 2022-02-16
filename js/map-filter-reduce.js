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
let multiLingual1 = [];
users.forEach(function (user){
    if(user.languages.length >= 3){
        multiLingual1.push(user.name, user.languages);
    }
})
console.log(multiLingual1,'foreachloop');

let multiLingual2 = users.filter(function (user){
    return user.languages.length >= 3;
})
console.log(multiLingual2,'filterfunction');

let multiLingual0 = users.map(user => user.email);
 console.log('herehere')
console.log(multiLingual0);


let yearsOfExperience = users.reduce((totalYearsOfExperience, user) =>{
    return totalYearsOfExperience + user.yearsOfExperience;
}, 0);

console.log(yearsOfExperience, 'maybenot');

let avgYearsOfExperience = users.reduce((totalYearsOfExperience, user) =>{
    return (totalYearsOfExperience + user.yearsOfExperience)/ users.length;
}, 0);
console.log(users.length);
console.log(avgYearsOfExperience,'ttt');


let emailString1 = [];
users.forEach(function(user){
    emailString1.push(user.email);
})

let emailString0 = [];
users.forEach((user)=> emailString0.push(user.email));
console.log(emailString0,'string0');

let longestEmailAddy = emailString1.reduce((a,b)=> b.length <= a.length ? a:b);
console.log(longestEmailAddy);