//Kayla Simmons 8/21/14 Conditionals
// When to add or remove oil from your vehicle
// I cant view the live lesson to see if the alert/prompt for the user having the option of re entering the
// information when a prompt is left empty and I can't find anything saying how to use the prompt. I can get it
//pop up and re ask the information but it does not put it in the formula.

//How many quarts of oil does your vehicle take. Found in owners manual.
var amountOfOilNeeded = prompt("How many quarts of oil does your vehicle take?");

//alert notifying user of wrong information if they forgot something.
if(amountOfOilNeeded == ""){
    alert("Invalid amount enter for how many quarts of oil your vehicle holds, please refresh and enter a valid amount for correct information.");
}
//You can check how many quarts are in your vehicle by checking the dipstick, most new dipsticks has a level
// showing how many quarts of oil are in your vehicle, if not most vehicles you can order one for!
var howMuchOil = prompt("How many quarts of oil is in your vehicle?");

//alert notifying user of wrong information if they forgot something
if(howMuchOil == ""){
    alert("Invalid amount enter for how many quarts of oil your vehicle holds, please refresh and enter a valid amount for correct information.");
}

//If amount of oil is over a quart low you need to add some, when oil is over a quart high you need to
// remove some, if you are in the good area of perfect to a little high to a little low you are fine.
if(howMuchOil <= amountOfOilNeeded -1){
    console.log("You're Oil is low and you need to add some or risk blowing your engine.")
}else if(howMuchOil >= amountOfOilNeeded +1){
    console.log("You have to much oil you need to drain some or risk blowing your engine.")
}else{
    console.log("Your oil level is correct and you are good to go.")
}
