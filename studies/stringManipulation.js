/**
 * STRING MANIPULATION 
 * 0. Even though strings are immutable, but there are non-destructive ways to interact with strings.
 * You can manipulate strings with operands and, because JavaScript automatically converts primitives to objects, methods. 
 * 
 * 1. String operators can be used to concatenate strings. 
 * 
 * 2. There are multiple string methods that allow you to manipulate strings in a variety of ways.
 */

//1. Operators //
//There are two string operators, both of which are used to concatenate. 
var firstPart = "She had style!"
var secondPart = "She had flair!"
var thirdPart = "She was there."
var themeSong = firstPart + " " + secondPart + " " + thirdPart //concatenation operator (+)

themeSong += " And so she became the Nanny!" //shorthand assignment operator (+=)

console.log(themeSong); // prints => "She had style! She had flair! She was there. And so she became the Nanny!""

//2. Methods //
//String methods allow you to manipulate strings to create new strings or arrays. 

var themeSong = "The nanny named Fran!"
var getName = themeSong.substring(themeSong.length - 5, themeSong.length -1) //This method extracts characters from a string.
//Which part of the string to extract is outlined in the first and second parameters (when to start, when to stop) 
var capIt = themeSong.toUpperCase(); //This method capitalizes the entire string
var splitIt = themeSong.split(" "); //This method splits the string into an array.
//Where to split the string is outlined in the parameter (where to split)

console.log(getName) // prints => "Fran"
console.log(capIt) // prints => "THE NANNY NAMED FRAN!"
console.log(splitIt) // prints => [ 'The', 'nanny', 'named', 'Fran!' ]