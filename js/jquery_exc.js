( function (){  /*open IIFE  Limits scope of variables/functions declared in this file */
    "use strict";

console.log($.fn.jquery);
window.onload = function(){
    alert('Your page has loaded')
}
$(document).ready(function (){
    alert('The DOM has finished loading');
});












}) (); /* close IIFE */