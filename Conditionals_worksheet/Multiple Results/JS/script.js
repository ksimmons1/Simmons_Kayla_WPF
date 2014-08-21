// Kayla Simmons 8/20/14 Conditionals Worksheet
// Grade letter calculator 95-100 A+, 90-94 A, 85-89 B+, 80-84 B, 76-79 C+, 73-75 C, 70-72 D, 0-69 F

var gradePercent = prompt("What is your grade percent in class?"); //Asks student to enter their percent grade to
// get a letter grade.

// Condition for the letter grade of A+
if(gradePercent >=95 && gradePercent <= 100){
    console.log("You have a " + gradePercent + " %, which means you have earned an A+ in the class!")
}

// Condition for the letter grade A
if(gradePercent >=90 && gradePercent<=94){
    console.log("You have a " + gradePercent + " %, which means you have earned an A in the class!")
}

// Condition for the letter grade B+
if(gradePercent >= 85 && gradePercent <= 89){
    console.log("You have a " + gradePercent + " %, which means you have earned an B+ in the class!")
}

// Condition for the letter grade B
if(gradePercent >= 80 && gradePercent <= 84) {
    console.log("You have a " + gradePercent + " %, which means you have earned an B in the class!")
}

// Condition for the letter grade C+
if(gradePercent >= 76 && gradePercent <= 79){
    console.log("You have a " + gradePercent + " %, which means you have earned an C+ in the class!")
}

// Condition for the letter grade C
if(gradePercent >= 73 && gradePercent <= 75){
    console.log("You have a " + gradePercent + " %, which means you have earned an C in the class!")
}

// Condition for the letter grade D
if(gradePercent >= 70 && gradePercent <= 72){
    console.log("You have a " + gradePercent + " %, which means you have earned an D in the class!")
}

// Condition for the letter grade F
if(gradePercent >= 0 && gradePercent <= 69)
console.log("You have a " + gradePercent + " %, which means you have earned an F in the class!")