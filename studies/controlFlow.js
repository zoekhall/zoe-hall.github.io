/**
* CONTROL FLOW
* 0. Control flow is the order in which a computer runs through code from top-to-bottom, left-to-right.
* Control flow is interrupted when it runs into blocks of code (conditional statements), which determine an alternate path for the program.
* Conditional statements execute code based on whether specific Boolean condtions are met.
* There are two major types of conditional statements: the if...else Statement and the switch statement. 
* 
* 1. The if... else statement executes a statement if the condition provided if true and if the condition is evaluated as true, the associated statement will be executed. 
* This statement consists of three separate statements, which allow multiple conditions to be chained and tested: if, else if, and else.
*
* 2. The switch statement consists of cases values to be compared to a given expression value.
* If the expression value matches with a case value, it will execute the associated statement. 
*
*/
// 1. if...else //
// 1.1 if Statement
//If statements are the first 'level' in an if... else statement and can stand alone, unlike the else if and else statements.
 
if("vampire" === "vampire"){ //if this evaluates as true, the statement will be executed 
    var response = "Get away from my neck!";
 }

 console.log(response); //prints => "Get away from my neck!"
  
 //1.2. else if Statement
 //Multiple else if statements can be chained to an if statement to test multiple conditions
 //When there are multiple conditionals, the else if statement will only execute if it's condition has been found true and previous conditions have been found false 
  
 if("vampire" === "human"){ //evaluates as false will move to the else if statement
    var response = "Just act natural";
 } else if("vampire" === "bat"){ //evaluates as false will move to the next else if statement
    var response = "Bats are cute";
 } else if("vampire" === "vampire"){ //evaluates as true will stop evaluating and execute the code
    var response = "Get away from my neck!";
 } else if("vampire" === "bunny"){
    var response = "Calm down, Anya";
 }
  
 console.log(response); //prints => "Get away from my neck!"
  
 // 1.3. else
 //Else statements contain the default statement to be executed if all other conditions evaluate as false.
  
 if("vampire" === "human"){ //evaluates as false will move to the else if statement
    var response = "Just act natural";
 } else if("vampire" === "bat"){ //evaluates as false will move to the next else if statement
    var response = "Aww bats are cute";
 } else if("vampire" === "Xander"){ //evaluates as false will move to the next else if statement
    var response = "Stop messing around!";
 } else if("vampire" === "bunny"){ //evaluates as false will move to the next else if statement
    var response = "Calm down, Anya";
 } else{
    var response = "Let's not wait around to find out" // code block is executed since all other conditions have evaluated as false
 }
  
 console.log(response); //prints => "Let's not wait around to find out!""
  
 // 2. switch
 //switch statements contain break statements that tell JavaScript when to stop executing code if a case is found to match the expression.
  
 const type = "Vampire Slayer";
 let girl;
 switch(type){
  case "Grim Reaper":
  case "Happy Time Temp":
    girl = "George Lass"; //can assign multiple cases to the same code block. If either of these cases are 'true' - the statement will be executed.
    break;
  case "Vampire Slayer": girl = "Buffy"; // matching case
  break; //break tells the program to stop evaluating and execute code
  case "Witch": girl = "Sabrina";
  default: girl = "human"; //default case (similar to else statement) - code that will be executed if no cases match
 }

 console.log(girl); //prints => Buffy
 
 