(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
           let circleArea = Math.PI * Math.pow(this.radius, 2);
            return circleArea;
        },

        logInfo: function (doRounding) {
           if(doRounding === true){
               console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
           }else {
               console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
           }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

// U6SXZ-UV9UQ-GNC5Z-9WYV6-Y7J6E  intellij coupon code
