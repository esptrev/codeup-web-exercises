'use strict';

/////////MY CODE///////////
function getLastCommitMade(user,repo){
    fetch(`https://api.github.com/repos/${user}/${repo}/commits`,{headers: {'Authorization': TREVOR_GITHUB_TOKEN}})
    .then(response => response.json())
    .then(function (data){
        console.log(data);
        console.log(data[0].commit.author.date);
    }).catch((error) => {
    console.log('ERROR:' + error);
});
}
getLastCommitMade('esptrev','codeup-web-exercises');

////////CUSTOM PROMISE//////////

let wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },num)
    });};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




















////////////RAYMONDS CODE/////////////FOR REFERENCE////////////SCALABLE AND REUSABLE///////////////
const getLastCommit = function (repoName){
    let [username, repo] = repoName.split("/")
    return fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {headers: { Authorization: `${GITHUB_KEY}`}})
        .then(response => {
            return response.json()
        }).then(result => {
            formatDate(result[0].commit.author.date)
        }).catch(error => alert('No Commits'))
}

const getLastRepo = function (username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: { Authorization: `token ${GITHUB_KEY}`}})
        .then(response => {
            return response.json()
        })
        .then(result => {
            // console.log(result)
            // console.log(result[0].repo.name)
            getLastCommit(result[0].repo.name)
        }).catch(error => alert('No Commits'))
}