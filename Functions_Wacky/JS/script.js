//Kayla Simmons 8-29-2014 Functions Assignment

// How long to smoke your meat. (We are having brisket this weekend!!)

var poundsOfMeat= prompt("How many pounds of meat are you planning to smoke?");
var timeToSmoke = function (weight){
    var time = weight * 1.5;
    return time
};

var smokeTime = timeToSmoke(poundsOfMeat);