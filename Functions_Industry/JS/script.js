//Kayla Simmons 8-29-14 Functions Assignment

// Making a Keno ticket

var spot = prompt("How many spots?");
var times = prompt("How many times?");

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


