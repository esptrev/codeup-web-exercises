(function (){
    'use strict';
  ////////GOING TO TRY TO UPDATE THE BLOG JSON FILE FROM BLOG EXERCISE

    async function ammendJsonFile (){
        const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
        const blogUrl = '/data/blog.json';
        const blogOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        };
       await fetch(blogUrl, blogOptions)
           .then(function (res){
                return res.json();
            })
            .then(function (results){
                console.log(results);
            })
            .catch(function (reason){
                console.log(reason);
            });



    }
    ammendJsonFile();




    // const reviewObj = {
    //     restaurant_id: 1,
    //     name: 'Codey',
    //     rating: 5,
    //     comments: "This is a really good place for coding and eating"
    // };
    // const url = 'https://codeup-restful-example.glitch.me/reviews';
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(reviewObj),
    // };
    // fetch(url, options)
    //     .then( response => console.log(response) ) /* review was created successfully */
    //     .catch( error => console.error(error) ); /* handle errors */








})();