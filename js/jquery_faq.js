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
    });


    $('#change-li').click(function (event){
        event.preventDefault();
        $('ul').children().last().css('background-color', 'yellow');
    })

    $('h3').click(function (event){
        event.preventDefault();
        $(this).next().css('font-weight', 'bolder');
    })

    $('li').click(function (event){
        event.preventDefault();
        $(this).parent().children().first().css("color", 'blue');
    })





















})();