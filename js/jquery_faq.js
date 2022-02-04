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






















})();