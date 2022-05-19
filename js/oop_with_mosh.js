/// object literal syntax

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw object literal")
    }
};
circle.draw();

/// factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw factory function")
        }
    }
}
const factoryCircle = createCircle(1);

/// constructor function

function CircleConstructor(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw constructor function')
    }
}

const anotherCircle = new CircleConstructor(5);