//Kayla Simmons 8/21/14 Conditionals
// Will I get off work before or after 3 today?
// I cant view the live lesson to see if the alert/prompt for the user having the option of re entering the
// information when a prompt is left empty and I can't find anything saying how to use the prompt. I can get it
//pop up and re ask the information but it does not put it in the formula.



// Each team has 3 people on it
var teams = prompt("How many teams are working today?");

// Invalid entry entered for teams variable however does not enter this into teams variable.
if(teams == ""){
    alert("Invalid entry on how many teams are working today. Please refresh and enter correct information for an accurate output of information.");
}

//Number of houses on the schedule to be cleaned for the day
var numberOfHouses = prompt("How many houses are we cleaning today?");

// Invalid entry entered for number of houses variable however shows two messages in console.
if (numberOfHouses == ""){
    alert(" Invalid entry on how many houses need cleaned today. Please refresh and enter correct information for an accurate output of information.")
}

//Each house and travel to it takes an hour and a half
var timePerHouse = 1.5;

//I always start work at 8 am
var startTime = 8;

//To get off at 3 I can only work 7 hours or less for the day.
var timeNeeded = 7;

//Used to see how many hours I will work for the day
var howLongWillIWork = timePerHouse * numberOfHouses / teams;

//8am + how many hours I work today must be less than or equal to the 7 hours I need to work to get off early today
if(startTime + howLongWillIWork <= timeNeeded){
    console.log("Yes you will get off early today!!")
}else{
    console.log("It's going to be a long day.")
}


