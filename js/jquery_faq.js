(function(){
    'use strict';

    $('dt').hover(
        function() {
            $(this).css('color', 'blue');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    $('dt').click(function (event){
        event.preventDefault();
        $(this).next().toggleClass('invisible');
        //// you must pair this with a css style of invisible in the style sheet /////  line 9 in html
    });

    $('dd').click(function (event){
        event.preventDefault();
        $(this).toggleClass('bold-class');
        //// you must pair this with class of bold in the style sheet /////  line 23 in html you toggle the 'class' not attribute
    });

    $('#change-li').click(function (event){
        $('ul').each(function(){
            $(this).children().last().css('background-color', 'yellow');
        })
    })

    $('h3').click(function (event){
        $(this).next().css('font-weight', 'bolder');
    })

    $('li').click(function (event){
        $(this).parent().children().first().css('color', 'blue');
    })





















})();