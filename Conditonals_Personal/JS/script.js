// Kayla Simmons 8/20/14 Conditionals
//Can we afford to eat Sirlion's breakfast buffet this weekend?
// I cant view the live lesson to see if the alert/prompt for the user having the option of re entering the
// information when a prompt is left empty is taught. I also can't find anything saying how to use the prompt. I can get it
//pop up and re ask the information but it does not put it in the formula.

//how many people are eating factors into the cost. On all breakfast kids 12 and under are free
var howManyPeople = prompt("How many people are eating breakfast over 12 years old?");

// alert notifying that a prompt was left empty and you won't get correct information.
if(howManyPeople == ""){
    alert(" Invalid information entered on how many people are eating. Please refresh and enter a valid amount to get accurate information.")
}

//How much money you have after bills to spend
var budget = prompt("How much money do you have to spend on breakfast in dollars?");

// alert notifying that a prompt was left empty and you won't get correct information.
if(budget == ""){
    alert("Invalid information entered on how much money you have to spend on breakfast. Please refresh and enter a valid amount to get accurate information.")
}

// amount per person to eat with tax included
var amount = 9.59;

// how many people are eating times how much per person it costs to eat gives you how much it will cost for the breakfast buffet
var cost = howManyPeople * amount;

// cost must be equal to or less that what you can afford
(cost <= budget) ? console.log("Yes you can eat a buffet this morning!!") : console.log("You have to cook breakfast today.");