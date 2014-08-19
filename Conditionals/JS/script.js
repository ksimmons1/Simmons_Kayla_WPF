//Conditional Logic- Ternary Operators

var age = 6;
var book;

// under 10 Green eggs and Ham otherwise they get The Time Machine

/*if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book)*/

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
