/**
* VARIABLES
* 0. Variables are uniquely named containers that hold onto and point to different data types within JavaScript.
* Variables get their name from the ability to change the values they point to after they have been created.
*
* 1. There are two phases in creating a variable: declaration (when the type of variable is determined) and assignment (when a value is assigned to the variable).
* If the two phases happen concurrently, this is called initialization.
* Depending upon the type of keyword variable was declared with, variable values can also be re-assigned.
*
* 2. There are three keywords use to create/declare a variable: var, let, const.
* The main differences between these keywords are whether it can be redeclared or re-assigned, whether it is block scoped, and their hoisting behavior.
*
* 3. Hoisting occurs when the program is executed.
* During the first code pass, the interpreter compiles and hoists variables declared with var and function declarations to the top of their scope
*/
 
// 1. Declaration and Assignment //
// 1.1 Declaration
// Variables are declared using the var, let, or const keyword.
// When variables are initally declared their value is undefined - except in the case of const which needs to be initialized.
var slayer;

console.log(slayer); // prints => undefined
 
// 1.1 Assignment
// Variables can be assigned a value using the assignment operator (=).
let slayer;
let slayer = "Buffy";

console.log(slayer); // prints => "Buffy"
 
// 1.2 Initialization
// Variables are initialized when they are declared and assigned a value at the same time/on the same line.
var scoobyGangMemb = "Xander";
console.log(scoobyGangMemb); // prints => "Xander"
 
// 1.3 Re-Assignment
// If a variable is declared with var or let, they can be re-assigned a new value.
var scoobyGangMemb = "Xander";
scoobyGangMemb = "Willow";

console.log(scoobyGangMemb); // prints => "Willow"
 
// 2. var, let, const //
// 2.1 var
// A var variable has these attributes: CAN be redeclared, CAN be reassigned, it is NOT block scoped, and it IS hoisted.  
console.log(badVamps); //declaration is hoisted - prints => undefined

var badVamps = "Drusilla"; 
var badVamps = "The Master"; //can be redeclared 
badVamps = "Heather"; //can be reassigned 
if(badVamps === "Heather"){
    var goodVamps = "Angel"; //does not have block scope 
}

console.log(badVamps); //prints "Heather"
console.log(goodVamps); //prints "Angel" 

// 2.2 let
// A let variable has these attributes: can NOT be redeclared, CAN be reassigned, it IS block scoped, and it is NOT hoisted.  
console.log(badVamps); //not hoisted - ReferenceError => Cannot access 'badVamps' before initialization

let badVamps = "Drusilla"; 
let badVamps = "The Master"; //can not be redeclared - SyntaxError => Identifier 'badVamps' has already been declared

let badVamps = "Drusilla"
badVamps = "Heather"; //can be reassigned 
if(badVamps === "Heather"){
    let goodVamps = "Angel"; //has block scope
}

console.log(badVamps); //prints "Heather"
console.log(goodVamps); // ReferenceError => goodVamps is not defined  

// 2.3 const
// A const variable has these attributes: can NOT be redeclared, can NOT be reassigned, it IS block scoped, and it is NOT hoisted.  
console.log(badVamps); //not hoisted - ReferenceError => Cannot access 'badVamps' before initialization

const badVamps = "Drusilla"; 
const badVamps = "The Master"; //can not be redeclared - SyntaxError => Identifier 'badVamps' has already been declared

const badVamps = "Drusilla"
badVamps = "Heather"; //can not be reassigned - TypeError => Assignment to constant variable

const badVamps = "Heather"
if(badVamps === "Heather"){
    const goodVamps = "Angel"; //has block scope
}

console.log(badVamps); //prints "Heather"
console.log(goodVamps); // ReferenceError => goodVamps is not defined  
 
// 3. Hoisting //
//3.1 Variable Hoisting
//Because of hoisting, var declartions can be accessed throughout the scope they are declared in, even before they are assigned.
//let and const are technically hoisted, but are not initialized and can't be accessed prior to declaration.
console.log(slayer); //prints => undefined
var slayer = Buffy; 
 
//3.2 Function Declaration Hoisting
//Because of hoisting, function declarations and body can be accessed before they are declared.
//Functions are hoisted to the very top of the scope and have precedence over variables.
 
console.log(potentialSlayer("Buffy")); // prints => "Save me, Buffy!"
 
function potentialSlayer(girl){
if(girl === "Buffy"){
   return "Save me, Buffy!";
}
}
