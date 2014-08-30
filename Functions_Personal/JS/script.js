//Kayla Simmons 8-29-2014 Functions Assignment

var length = prompt("Enter length of fish tank in inches.");
var width = prompt("Enter width of fish tank in inches.");
var height = prompt("Enter height of fish tank in inches");

function waterNeeded(long, wide, tall) {
    var gals = 316.42;
    var totalSquareInches = long * wide * tall;
    var gallonsOfWater = Math.round(totalSquareInches / gals);
    return gallonsOfWater;
}


var tank1 = waterNeeded(length, width, height);
console.log(tank1 + " Gallons of water are needed to fill your fish tank.");
