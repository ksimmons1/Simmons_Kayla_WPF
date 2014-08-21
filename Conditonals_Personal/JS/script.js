// Kayla Simmons 8/20/14 Conditionals
//Can we afford to eat Sirlion's breakfast buffet this weekend?

var howManyPeople = prompt("How many people are eating breakfast over 12 years old?");
var budget = prompt("How much money do you have to spend on breakfast in dollars?");
var amount = 9.59;

var cost = howManyPeople * amount;

(cost <= budget) ? console.log("Yes you can eat a buffet this morning!!") : console.log("You have to cook breakfast today.");