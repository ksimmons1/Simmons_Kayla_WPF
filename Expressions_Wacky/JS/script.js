//How much soap is needed for slip and slid. In my household we don't use the new designed slip and slides as they
//tear easily and you can't fit more than one person at a time. We use a big tarp, a sprinkler, and dish soap! (as
//do many other country folk)
//Kayla Simmons 8/14/14 Expressions_Wacky Assignment

var length = prompt ("How long is the tarp you are using for your slip and slid in feet?", 15);
// establishing the size of the tarp used

var width = prompt ("How wide is the tarp you are using for your slip and slid in feet?", 15);
// establishing the size of tarp used

var tarpSize = length * width;
// square feet of tarp is figured here

var soapAmount = tarpSize / 50;
// general rule is an ounce of soap for every 50 square feet

var timePlayed = prompt("How long in hours will you be playing on the slip and slid?", 2)

var soapNeeded = soapAmount / .5 * timePlayed

console.log("You will need " + soapNeeded + " ounces of soap to play on the slip and slid for " + timePlayed + " hours.")

