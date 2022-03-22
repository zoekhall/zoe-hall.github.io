/**
 * OPERATORS 
 * 0. Operators are characters that perform tasks in code. 
 * Operaters are separated into multiple categories based on the type of task they perform.
 * They are also distinguished by the numper of operands they operate on. 
 * 
 * 1. Assignment operators assign the value of the right operand to the left operand.
 * 
 * 2. Arithmetic operators are used in mathematical expressions.
 * 
 * 3. Comparison operators are used to compare two operands and evaluate to a Boolean value. 
 * 
 * 4. Logical operators are used to evaluate two expressions and evaluate to a Boolean value.
 * 
 * 5. Unary operators are operators that takes one operand.
 * 
 * 6. Ternary operators are operators that takes three operands.
 * 
 */

//1. Assignment Operators //
//Assignment operators include: =, +=. -=. *=, /=, %=, **=
var num = 2; //The assignment operator is the ultimate assignment operator

num += 2; //Other assignment operators assign a value and perform an arithmetic operation at the same time (equivalent to num = 2 + 2)

console.log(num) // prints => 4

//2. Arithmetic Operators //
//Arithmetic operators include: +. -, *. /, **, %. ++, --
var multiply = 2 * 2; //The +, -, *, /operators perform basic arithmetic expressions 
var exponent = 2 ** 3 //The exponentiation operator raises the left operand to the power of the right operand
var remainder = 4 % 2 //The remainder operator returns the remainder of dividing the left operand by the right operand
var addOne = 2 
addOne++ //The increment (++) and decrement (--) operators are the same as adding or subtracting one 

console.log(multiply) // prints => 4
console.log(exponent) // prints => 8
console.log(remainder) // prints => 0
console.log(addOne) // prints => 3

//3. Comparison Operators //
//Comparison operators include: >, <, >=, <=, ==, ===, !=, !==
var compare = 2 >= 4; //The >, <, >=, <= operators peform basic comparisons 
var equal = 2 == "2" //The equal (==) and not equal (!=) operators compare if the operand is equal (and does not take into account type)
var strictEqual = 2 === "2" //The strictly equal (===) and strictly not equal (!==) compare if the operand and the type of operand are both equal

console.log(compare) // prints => false
console.log(equal) // prints => true
console.log(strictEqual) // prints => false

//4. Logical Operators //
//Logical operators include: &&, ||, !
var and = 2 + 2 === 4 && 2 >= 2 === true; //The and operator compares if both expressions are true
var or = 2 + 2 === 4 || 1 >= 2 === true; //The or operator compares if either expression is true 
var bangBang = !(2 + 2 === 4); //The bang operator flips truthy and falsy outputs 

console.log(and) // prints => true 
console.log(or) // prints => true
console.log(bangBang) // prints => false

//5. Unary Operators //
//Some unary operators are included above (!, ++, --), but unary operators also include: typeof, delete, +, -
var type = typeof "Fran Drescher"
var theNanny = {
    name: "Fran Drescher",
    familyHomeLocal: "Flushing, Queens",
    paramore: "Maxwell Sheffield",
    fabulousness: "top level", 
}
delete theNanny.familyHomeLocal; 
var makeNum = +"2"; 

console.log(and) // prints => string
console.log(or) // prints => {name: 'Fran Drescher', paramore: 'Maxwell Sheffield', fabulousness: 'top level'}
console.log(bangBang) // prints => 2

//6. Ternary Operator // 
//The conditional operator is only ternary operator so it's known as 'the ternary operator'
var testTest = "Is this thing on?"; 
var response = "NO!";
var result = response === "NO!" ? "Flip the switch!" : "*loud feedback sound*"

console.log(result); // prints => "Flip the switch!"