// Kayla Simmons 8/20/14 Conditionals Worksheet
//Tire Pressure

// Pressure in the front driver side tire
var frontDriver = 72;

// Pressure in the front passenger side tire
var frontPassenger = 72;

// Pressure in the rear driver side tire
var rearDriver = 75;

// Pressure in the rear passenger side tire
var rearPassenger = 75;

// front driver side and front passenger side needs to be equal so does rear driver side and rear passenger
// side tires. If they fronts and rears are equal then "The tires pass specs!" If not then "Get your tires
// checked out!"

if(frontDriver == frontPassenger && rearDriver == rearPassenger){
    console.log("The tires pass specs!");
}else{
    console.log("Get your tires checked out!")
}