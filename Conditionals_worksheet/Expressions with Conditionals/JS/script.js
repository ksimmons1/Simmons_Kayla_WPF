//Kayla Simmons 8/20/14 Conditionals Worksheet
//Expressions with Conditionals

// Last chance for gas! A driver has to determine if they can make it across the desert with their current fuel.
// They are about to past the last gas station for the next 200 miles and they need to determine whether they
// should stop now for gas or not.

var mpg = 20;                    //Gas efficiency of car, how many miles per gallon
var remainingGas = 25;           // Gauge reading of the gas tank, how much is left in %
var tankSize = 20;               // Car's gas tank size, how many gallons it will hold
var distanceToTravel = 200;      // distance to next gas station is 200 miles

var gallonsLeft = tankSize * (remainingGas/100);  // gallons left is determined by how many gallons your tank can
// hold divided by the percent left - for this to work correctly you must convert the percent to a decimal.

var distanceYouCanTravel = gallonsLeft * mpg; // To find how far you can travel you must take gallons left times
// how many miles per gallon you get

// If the distance you can travel is equal to or greater than the distance you have to travel then you will make
//it to next gas station.
if (distanceYouCanTravel >= distanceToTravel){
    console.log("Yes, you can make it without stopping for gas!");
    //if true this is displayed
}else{
    console.log(" You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can");
    //if false this is displayed
}

