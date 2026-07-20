console.log("Hi,I'm Haya");
console.log("Welcome to JavaScript");


// ======================================
// JavaScript Variables
// ======================================

// console.log() ka use output screen par dikhane ke liye hota hai.

console.log("===== Variables in JavaScript =====");

// ------------------------------------------------------
// VAR
// ------------------------------------------------------

// var purana tareeqa hai variable banane ka.
// Isko dobara same naam se declare bhi kar sakte hain.
// Iski value bhi change ho sakti hai.

var city = "Karachi";

console.log(city);

city = "Lahore"; // Value change ki

console.log(city);

// ------------------------------------------------------
// LET
// ------------------------------------------------------

// let modern tareeqa hai variable banane ka.
// Iski value change ho sakti hai.
// Lekin same naam se dobara declare nahi kar sakte.

let age = 20;

console.log(age);

age = 21;

console.log(age);

// ------------------------------------------------------
// CONST
// ------------------------------------------------------

// const ki value kabhi change nahi hoti.
// Isko declare karte waqt value dena zaroori hota hai.

const country = "Pakistan";

console.log(country);

// Neeche wali line error degi.
// country = "India";

// ------------------------------------------------------
// Naming Rules
// ------------------------------------------------------

// Variable name number se start nahi ho sakta.

// let 1name = "Haya"; ❌

// Sahi tareeqa

let name1 = "Meow";

console.log(name1);

// Spaces allow nahi hain.

// let my name = "Haya"; ❌

// Camel Case best practice hai.

let fullName = "Haya Rajput";

console.log(fullName);

// ------------------------------------------------------
// Multiple Variables
// ------------------------------------------------------

let firstName = "Haya";
let lastName = "Rajput";

console.log(firstName);
console.log(lastName);

// ------------------------------------------------------
// Practice
// ------------------------------------------------------

let university = "UOL University";
let semester = 4;
const course = "JavaScript";

console.log(university);
console.log(semester);
console.log(course);

// ======================================
// End of Variables Topic
// ======================================