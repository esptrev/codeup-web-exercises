(function () {  /*open IIFE  Limits scope of variables/functions declared in this file */
    "use strict";

    console.log($.fn.jquery); /* Quick check to ensure jquery is loaded and accessable */


    /* Alert lets us know page has loaded, jquery is working */
    window.onload = function () {
        alert('Your page has loaded')
    }

    /* jquery function, you can call more functions inside this function,  this will allow those functions to execute prior to all the page data being displayed. */

    $(document).ready(function () {
        alert('The DOM has finished loading');
    });


    /* starting jquery selectors exercise here */

    /* grabbing the element with the id codeup, assigning to variable and sending to alert on browser page */
    let contents = $('#codeup').html();
    alert(contents);

    /* grabbing elements with class of "important" and displaying yellow background behind them */
    $('.important').css('background-color', 'yellow');


}) (); /* close IIFE */