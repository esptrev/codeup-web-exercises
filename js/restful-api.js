(function (){
    'use strict';
  ////////GOING TO TRY TO UPDATE THE BLOG JSON FILE FROM BLOG EXERCISE
  //   fetch('/data/blog.json', {
  //       method: 'PATCH',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       content: JSON.stringify({
  //           // your expected POST request payload goes here
  //           title: "My post title",
  //           content: "My post content."
  //       })
  //   })
  //       .then(res => res.json())
  //       .then(data => {
  //           // enter you logic when the fetch is successful
  //           console.log(data)
  //       })
  //       .catch(error => {
  //           // enter your logic for when there is an error (ex. error toast)
  //           console.log(error)
  //       })


    // const asyncPostCall = async () => {
    //     try {
    //         const response = await fetch('/data/blog.json', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 // your expected POST request payload goes here
    //                 title: "My post title",
    //                 body: "My post content."
    //             })
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //         // enter you logic when the fetch is successful
    //
    //     } catch(error) {
    //         // enter your logic for when there is an error (ex. error toast)
    //
    //         console.log(error)
    //     }
    // }
    // asyncPostCall()

    function ammendJsonFile (){
        const blogPost = {title: 'Ajax Requests', content: 'Are a fun way to use JS!'};
        const blogUrl = '/data/blog.json';
        const blogOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            content: JSON.stringify(blogPost),
        };
       fetch(blogUrl, blogOptions)
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