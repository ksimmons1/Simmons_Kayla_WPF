//Kayla Simmons 8-29-14 Functions Assignment

// Making a Keno ticket

var spot = prompt("How many spots?");

if(spot === ""){
    spot = prompt("Enter a number value here. \n How many spots are you wanting to play?")
}

var times = prompt("How many times?");

if(times === ""){
    times = prompt("Enter a number value here. \n How many games are you wanting to play?")
}



function keno(){
    var startingNum = 1;
    var endingNum = 80;
    var pickingNumbers = Math.round(Math.random() * (endingNum - startingNum) + Number(startingNum));

    return pickingNumbers

}

var ticket = keno();
console.log(ticket + " Bulls eye if purchased.");

for(var a = 0; a < spot; a++){
    console.log(keno() + " These numbers are good for " + times + " games. Good luck!")
}


