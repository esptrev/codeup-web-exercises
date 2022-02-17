'use strict';
// const myPromise = fetch('https://api.github.com/users/USERNAME/received_events', {
//     username: 'esptrev'
// });
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));


// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//


fetch('https://api.github.com/users/esptrev/repos',{headers: {'Authorization': TREVOR_GITHUB_TOKEN}})
    .then(response => response.json())
    .then(function (data){
        console.log(data)
    })

    // .then(users => {
    //     users.forEach( userObj => {
    //         // do something with each username
    //         console.log(userObj.login);
    //     })
    // })
    // .catch(error => console.error(error));
