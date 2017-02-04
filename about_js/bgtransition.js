/* ==================== Required Functions ==================== */
// This is required to get the initial background-color of an element.
// The element might have it's bg-color already set before the transition.
// Transition should continue/start from this color.
// This will be used only once.
function getElementBG(elm) {
    return getNextColor();
}

// A function to generate random numbers.
// Will be needed to generate random RGB value between 0-255.
function random() {
    if (arguments.length > 2) {
        return 0;
    }
    switch (arguments.length) {
        case 0:
            return Math.random();
        case 1:
            return Math.round(Math.random() * arguments[0]);
        case 2:
            var min = arguments[0];
            var max = arguments[1];
            return Math.round(Math.random() * (max - min) + min);
    }
}

// Generates a random RGB value.
function generateRGB(min, max) {
    var min        = min || 0;
    var max        = min || 255;
    var color    = [];
    for (var i = 0; i < 3; i++) {
        var num = random(min, max);
        color.push(num);
    }
    return color;
}

getNextColor = (function() {
    var initcnt = 0;
    return function() {
//        var colors = [
//            //'#f44336', 
//            '#9c27b0',
//            '#673ab7',
//            '#3f51b5',
//            '#2196f3',
//            '#03a9f4',
//            // '#00bcd4',
//            // '#009688',
//       //     '#4caf50',
//       //     '#8bc34a',
//       //     '#cddc39',
//            //'#ffeb3b',
//            //'#ffc107',
//            //'#ff9800',
//            //'#ff5722'
//            ];
        var colors = [
            '#F44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#3F51B5',
            '#2196F3',
            '#03A9F4',
            '#00BCD4',
            '#009688',
            '#4CAF50',
            '#8BC34A',
            '#CDDC39',
          //  '#FFEB3B',
            '#FFC107',
            '#FF9800',
            '#FF5722'
        ];

        return hex2rgb(colors[parseInt(initcnt++)%parseInt(colors.length)]);
    }
})();

// Calculates the distance between the RGB values.
// We need to know the distance between two colors
// so that we can calculate the increment values for R, G, and B.
function calculateDistance(colorArray1, colorArray2) {
    var distance = [];
    for (var i = 0; i < colorArray1.length; i++) {
        distance.push(Math.abs(colorArray1[i] - colorArray2[i]));
    }
    return distance;
}

// Calculates the increment values for R, G, and B using distance, fps, and duration.
// This calculation can be made in many different ways.
function calculateIncrement(distanceArray, fps, duration) {
    var fps            = fps || 30;
    var duration    = duration || 1;
    var increment    = [];
    for (var i = 0; i < distanceArray.length; i++) {
        var incr = Math.abs(Math.floor(distanceArray[i] / (fps * duration)));
        if (incr == 0) {
            incr = 1;
        }
        increment.push(incr);
    }
    return increment;
}

// Converts RGB array [32,64,128] to HEX string #204080
// It's easier to apply HEX color than RGB color.
function rgb2hex(colorArray) {
    var color = [];
    for (var i = 0; i < colorArray.length; i++) {
        if(colorArray[i] > 255) colorArray[i] = 255;
        var hex = colorArray[i].toString(16);
        if (hex.length < 2) { hex = "0" + hex; }
        color.push(hex);
    }
    return "#" + color.join("");
}
function hex2rgb(hex) {
//    console.log(hex);
//    console.log("caller is " + arguments.callee.caller.toString());

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var arr = [];
    arr.push(parseInt(result[1],16));
    arr.push(parseInt(result[2],16));
    arr.push(parseInt(result[3],16));
    return arr;
}
/* ==================== Setup ==================== */
// Duration is not what it says. It's a multiplier in the calculateIncrement() function.
// duration = 1-4, fast-to-slow
var fps                = 60;
var duration        = 1;
var transElement    = document.body;
var currentColor    = getElementBG(transElement);
var transHandler    = null;

//startTransition();

/* ==================== Transition Initiator ==================== */
function startTransition() {
    clearInterval(transHandler);

    //targetColor    = generateRGB();
    targetColor    = getNextColor();
    distance    = calculateDistance(currentColor, targetColor);
    increment    = calculateIncrement(distance, fps, duration);
    //console.log("Transitioning between: ",rgb2hex(currentColor),rgb2hex(targetColor));
    //console.log("Transitioning between: ",(currentColor),(targetColor));
    //console.log("=================================================")
    transHandler = setInterval(function() {
        transition();
    }, 1000/fps);
}

/* ==================== Transition Calculator ==================== */
function transition() {
    // checking R
    if (currentColor[0] > targetColor[0]) {
        currentColor[0] -= increment[0];
        if (currentColor[0] <= targetColor[0]) {
            increment[0] = 0;
        }
    } else {
        currentColor[0] += increment[0];
        if (currentColor[0] >= targetColor[0]) {
            increment[0] = 0;
        }
    }

    // checking G
    if (currentColor[1] > targetColor[1]) {
        currentColor[1] -= increment[1];
        if (currentColor[1] <= targetColor[1]) {
            increment[1] = 0;
        }
    } else {
        currentColor[1] += increment[1];
        if (currentColor[1] >= targetColor[1]) {
            increment[1] = 0;
        }
    }

    // checking B
    if (currentColor[2] > targetColor[2]) {
        currentColor[2] -= increment[2];
        if (currentColor[2] <= targetColor[2]) {
            increment[2] = 0;
        }
    } else {
        currentColor[2] += increment[2];
        if (currentColor[2] >= targetColor[2]) {
            increment[2] = 0;
        }
    }

    // applying the new modified color
    //transElement.style.backgroundColor = rgb2hex(currentColor);
    addRadialBackground(transElement,rgb2hex(currentColor));
    // transition ended. start a new one
    if (increment[0] == 0 && increment[1] == 0 && increment[2] == 0) {
        startTransition();
    }
}

function addRadialBackground(elem,color) {
    var str = '';
    //var str = '-webkit-transition: background-image 0.2s ease-in-out; transition: background-image 0.2s ease-in-out;';
    str = str + '-webkit-transition: opacity 1.0s; -moz-transition: opacity 1.0s; -o-transition: opacity 1.0s;';
    str = str + 'background-image: -webkit-radial-gradient(center center, circle cover, '+color+', #000000) !important;';
    str = str + 'background-image: -moz-radial-gradient(center center, circle cover, '+color+', #000000) !important;';
    str = str + 'background-image: radial-gradient(center center, circle cover, '+color+', #000000) !important;';
    // console.log(body);
    // console.log(str);
    // console.log(body.style.backgroundImage);
    // console.log(colors.length);
    elem.setAttribute('style',str);
}
