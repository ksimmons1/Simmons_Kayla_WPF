//Kayla Simmons 8-29-2014 Functions Assignment



function waterNeeded(gals){
    var length = prompt("Enter length of fish tank in inches.");
    var width = prompt("Enter width of fish tank in inches.");
    var height = prompt("Enter height of fish tank in inches");
    var totalSquareInches= length * width * height;
    var gallonsOfWater = totalSquareInches / gals;
    console.log(gallonsOfWater + " Gallons of water are needed to fill your fish tank.")
}

waterNeeded(316.42);
