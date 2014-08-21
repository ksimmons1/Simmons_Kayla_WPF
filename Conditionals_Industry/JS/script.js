//Kayla Simmons 8/21/14 Conditionals
// Will I get off work before or after 3 today?

var teams = prompt("How many teams are working today?");
var numberOfHouses = prompt("How many houses are we cleaning today?");
var timePerHouse = 1.5
var startTime = 8
var timeNeeded = 7

var howLongWillIWork = timePerHouse * numberOfHouses / teams

if(startTime + howLongWillIWork <= timeNeeded){
    console.log("Yes you will get off early today!!")
}else{
    console.log("It's going to be a long day.")
}

if(teams == ""){
    console.log("Invalid entry on number of teams.")
}

if (numberOfHouses == ""){
    console.log(" Invalid entry on how many houses need cleaned today.")
}