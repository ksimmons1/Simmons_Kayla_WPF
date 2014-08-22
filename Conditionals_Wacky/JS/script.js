//Kayla Simmons 8/21/14 Conditionals
// When to add or remove oil from your vehicle

//How many quarts of oil does your vehicle take. Found in owners manual.
var amountOfOilNeeded = prompt("How many quarts of oil does your vehicle take?");

//You can check how many quarts are in your vehicle by checking the dipstick, most new dipsticks has a level
// showing how many quarts of oil are in your vehicle, if not most vehicles you can order one for!
var howMuchOil = prompt("How many quarts of oil is in your vehicle?");

//If amount of oil is over a quart low you need to add some, when oil is over a quart high you need to
// remove some, if you are in the good area of perfect to a little high to a little low you are fine.
if(howMuchOil <= amountOfOilNeeded -1){
    console.log("You're Oil is low and you need to add some or risk blowing your engine.")
}else if(howMuchOil >= amountOfOilNeeded +1){
    console.log("You have to much oil you need to drain some or risk blowing your engine.")
}else{
    console.log("Your oil level is correct and you are good to go.")
}
