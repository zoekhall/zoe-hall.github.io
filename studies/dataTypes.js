

/**
* DATA TYPES
* 0. Data types are different types of values that are separated into two categories: primitive data types vs complex data types.
* Primitive data types are single immutable values and complex data types are collections of values/properties.
* Knowing what type of data is present is crucial to knowing how to interact with that data.
*
* 1. Numbers are primitive data types representing numeric data.
*
* 2. Strings are primitive data types of zero or more characters wrapped in quotes.
*
* 3. Booleans are primitive data types representing true or false.
*
* 4. Arrays are complex data types and are zero-indexed, ordered list-like objects.
*
* 5. Objects are complex data types used to store various properties and can represent real world objects.
*
* 6. Functions are complex data types consisting of blocks of reusable code designed to execute specific tasks when invoked/called upon.
*
* 7. undefined is a primitive data type indicating a variable has been declared but not assigned a value.
*
* 8. null is a primitive data type used to indicate the abscence of a value.
*
* 9. NaN is a primitive numeric data type which indicates an expression has evaluated to 'Not a Number'
*
* 10. Infinity is a special numeric value representing the highest possible value. 
* -Infinity is the converse of this representing the lowest possible value.
*
* 11. Primitive/simple value types are single immutable values and complex data types are mutable collections of values/properties that hold references to the values within them.
*
* 12. Primitive values have a fixed size in memory and are able to be directly stored in the variables they are assigned to.
* If the value of variable a is assigned to variable b, variable b is assigned a copy of variable a's value. 
* These values now exist separately from another within their respective variables.
* If variable a is reassigned, this will not effect the value in variable b. 
* Complex values do not have a fixed size in memory, because of this variables are unable to directly store them.
* Instead, variables store a reference to the complex value - ie point to where to find the value. 
* If the value of variable a is assigned to variable b, variable b is assigned the same reference as variable a. 
* They are now both pointing to the SAME value, because of this, regardless of which variable is updated, the same object will be updated.
* */
 
// 1. Number //
// Numbers can be integers and floating point numbers (decimals)
var posInteger = 2;
var decimal = .2;

console.log(decimal) // prints => .2
 
// 2. String //
// Strings have zero-based indexing and characters can be accessed using bracket notation.
// Strings can be concatenated with the concatenation operation but template literals can also be used to interpolate expressions
var plea = "Please, pass me!";
var emptyStr = ""; //strings do not have to contain any characters and can be 'empty'
var getThatChar = word[word.length - 1]; //string character accessed using the length property 
var concatStr = plea + " " + "I beg of you"
var interpolateStr = `${plea} I beg of you`;

console.log(getThatChar); //prints => !
console.log(concatStr); //prints "Please, pass me! I beg of you"
console.log(interpolateStr); //prints "Please, pass me! I beg of you"
 
// 3. Boolean //
//Booleans are most often used in conditional statements
var trueBool = true;
var falseBool = false;

console.log(trueBool) //prints => true
 
// 4. Array //
//Arrays can hold multiple data types, whether they be primitive or complex.
//Array properties can be accessed using bracket notation and the length property. 
var dataTypesGalore = [1, "2", {3: "3", 4: "4"}, [5, 6, 7], function sum(x, y){return x + y;}] //arrays within arrays are called nested arrays
var getStr = dataTypesGalore[1];

console.log(getFunct); //prints => "2"
 
// 5. Object //
//Objects use named indexes in key-value format to sort and access its data.
//Object key-value pairs can be accessed using bracket notation or dot notation.
var slayer = {
    firstName: "Buffy",
    lastName: "Summers",
    age: 15,
    friends: ["Xander", "Willow", "Giles"],
    badGuySlayings: {
        impalement: "the Master",
        explosion: "Mayor Wilkins",
    },
    loveInterestAgeDifference: function loveInterest(angelAge){
        if(angelAge > slayer.age){
            return "Well, that's a bit uncomfortable";
        }
    }
 }
 
console.log(slayer.friends); //friends property accessed using dot notation - prints => ["Xander", "Willow", "Giles"]
console.log(slayer.loveInterestAgeDifference(200)); //loveInterestAgeDifference accessed using bracket notation - prints => "Well, that's a bit uncomfortable"
 
// 6. Function //
// Functions often take in parameters to act as variables within the function and when functions are invoked/called with ( ), they can include arguments to indicate what these parameter values should be.
// Three ways to define a function are: function declaration, function expression, and arrow functions  

// 6.1 Function Declarations 
// Function declarations always start with the keyword function and are named.
// They are immediately hoisted to the top of their scope when the program is run so they can be accessed before they are declared.
function loveInterest(personOne, personTwo){
   return `${personOne} and ${personTwo} sitting in a tree...`
}

console.log(loveInterest("Buffy", "Spike")); // prints => Buffy and Spike sitting in a tree...
 
// 6.2 Function Expressions 
// Function expressions are functions that are stored within variables. 
// Function expressions do not need names, they can be anonymous functions.
var loveInterest = function(personOne, personTwo){
   return `${personOne} and ${personTwo} sitting in a tree...`
}

console.log(loveInterest("Buffy", "Spike")); // prints => Buffy and Spike sitting in a tree...
 
// 6.3 Arrow Functions
// When using an arrow function, the function keyword is not needed.
// If the function only has one return statement, the return keyword is not needed
let loveInterest = (personOne, personTwo) => `${personOne} and ${personTwo} sitting in a tree...`

console.log(loveInterest("Buffy", "Spike")); // prints => Buffy and Spike sitting in a tree...
 
// 7. undefined //
// Until a variable has been assigned another value, the variable is assigned undefined as its value
let slayer;

console.log(slayer); // prints => undefined
 
// 8. null //
// null is used to indicate a value is unknown
var zoeBootcampExamResult = null; //this value is unknown so it is assigned null 

console.log(zoeBootcampExamResult); // prints => null
 
// 9. NaN //
// NaN indicates a computational error
function numbersGame(num){
   return 5 + num; //since no argument was given with function call, this line resolves to 'return 5 + undefined'
}

console.log(numbersGame()); // prints => NaN

// 10. Infinity //
// Represents the highest (infinity) or lowest (-infinity) possible number

if(Infinity > 10000000000000000000000000000000000000000000000000000){
    console.log("To infinity, and beyond!")
} //prints "To infinity, and beyond!"

// 11. Copy vs Reference //
// 11.1 Copy - Primitive Data Types
    var annoying = "Kevin"; 
    var boyfriend = annoying; //the value of annoying is copied and assigned to the variable boyfriend
    var annoying = "Kit" // annoying is reassigned a value, but the value of boyfriend will not change as it is now a separate entity
    
    console.log(boyfriend) // prints "Kevin"
    console.log(annoying) // prints "Kit"

// 11.2 Reference - Complex Data Types
    var annoying = {
        boyfriend: "Kevin", 
        midBro: "Kit", 
        youngBro: "Keagan", 
    }
 
    var guessILoveThem = annoying; //guessILoveThem is now pointing to the same object as annoying is 

    annoying.dog = "Dude"; //both variables can update the object 
    guessILoveThem.cats = ["Cucumber", "Daisy"];
    
    console.log(annoying)  // prints {boyfriend: "Kevin", midBro: "Kit", youngBro: "Keagan", dog: "Dude", cats: ["Cucumber", "Daisy"]}
    console.log(guessILoveThem) // prints {boyfriend: "Kevin", midBro: "Kit", youngBro: "Keagan", dog: "Dude", cats: ["Cucumber", "Daisy"]}


