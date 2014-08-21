// Kayla Simmons 8/20/14 Conditionals
//Can we afford to eat Sirlion's breakfast buffet this weekend?

//how many people are eating factors into the cost. On all breakfast kids 12 and under are free
var howManyPeople = prompt("How many people are eating breakfast over 12 years old?");

//How much money you have after bills to spend
var budget = prompt("How much money do you have to spend on breakfast in dollars?");

// amount per person to eat with tax included
var amount = 9.59;

// how many people are eating times how much per person it costs to eat gives you how much it will cost for the breakfast buffet
var cost = howManyPeople * amount;

// cost must be equal to or less that what you can afford 
(cost <= budget) ? console.log("Yes you can eat a buffet this morning!!") : console.log("You have to cook breakfast today.");