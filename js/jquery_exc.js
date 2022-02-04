(function () {  /*open IIFE  Limits scope of variables/functions declared in this file */
    "use strict";

    console.log($.fn.jquery); /* Quick check to ensure jquery is loaded and accessable */


    /* Alert lets us know page has loaded, jquery is working */
    window.onload = function () {
        // alert('Your page has loaded')
    }

    /* jquery function, you can call more functions inside this function,  this will allow those functions to execute prior to all the page data being displayed. */

    $(document).ready(function () {
        // alert('The DOM has finished loading');
    });


    /* starting jquery selectors exercise here */

    /* grabbing the element with the id codeup, assigning to variable and sending to alert on browser page */
    let contents = $('#codeup').html();
    // alert(contents);

    /* grabbing elements with class of "important" and displaying yellow background behind them */
    $('.important').css('background-color', 'yellow');

//    Start of Second jquery exercises from curriculum
    let firstULContents = $('#firstUL').html();
    // alert(firstULContents);

    let contentsFirstDiv = $('#firstDiv').html();
    // alert(contentsFirstDiv);

    // red border around codeup class elements
    $('.codeup').css('border', 'solid red 5px');

//    set font size on li elements
    $('li').css('font-size', '50px');
    $('.notImport').css('font-family', 'Papyrus')

//    highlight all h1,li elements

    $('li').css('background-color', 'rgba(147,250,165,1)');
    $('h1').css('background-color', 'rgba(13,180,185,1)');

//    highlight h2,p elements with single line of code
    $('p,h2').css('background-color', 'rgba(183,244,216,1)');

//    border around all direct children to ul elements with notImport class

    $('ul.notImport > li').css('border', '3px dashed blue');


    // ON Hover, you need In/Out to revert. Element will stay 'stuck' on hover in otherwise

    $('.codeup').hover(
        function () {
            $(this).css('background-color', 'rgba(254,1,154,1)');
            $(this).css('border', '10px dashed rgba(21,244,238,1)');
        },
        function () {
            $(this).css('background-color', '#FFF');
            $(this).css('border', '3px double red');
        }
    );
    $('#firstDiv').css('font-family', 'Comic Sans MS');

//    Make all p tags have a font of 18px on dbl-click

    let dblP = function () {
        $(this).css('font-size', '18px');
    }
    $('p').dblclick(dblP);

//    Make all li text color red when hover, reset to black when not

    $('li').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black');
        }
    );


})(); /* close IIFE */