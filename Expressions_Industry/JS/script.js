// Industrial Expression - How many cases of call bourbon will be needed for 1 year at the bar?
// Kayla Simmons 8/14/14 Expressions_Industry Assignment


var weeklyUse = prompt ("How " + "many " + "drinks " + "of " + "call " + "bourbon " + "are " + "sold " + "weekly?", 550);
// There are just over 60 shots per bottle of bourbon. Each drink and shot are one shot unless it is a double then it is two shots

var spills = prompt ("How " + "many " + "spills " + "are " + "there " + "weekly?", 7);
// Each spill or oops is recorded for inventory so we know how much less alcohol we have and aren't charging for the drink

var numberOfBottles = (Number(weeklyUse) + Number(spills)) /60;
// finding the number of bottles used allows you to find how many cases are needed

var caseSize = prompt ("How " + "many " + "bottles " + "of " + "bourbon " + "are " + "in " + "a " + "case?", 12);
// Depending on where you order from there may be a different number of bottles per case

var annualCases = numberOfBottles / caseSize * 52;


// Equation PEMDAS
// weeklyUse + spills / 60 = how many bottles
// case size / how many bottles * 52 weeks = how many cases

console.log("you " + "will " + "need " + "around " + annualCases + " cases " + " of " + "call " + "bourbon " + "a " + "year.");