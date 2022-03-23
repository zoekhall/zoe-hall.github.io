/**
* FUNCTIONS
* 0. Functions consist of blocks of code designed to execute specific tasks when invoked/called upon.
* Functions allow you to invoke and execute the code as many times as you want with different arguments to produce different results.
*
* 1. First, define the function and follow that function definition with parentheses - if applicable, include parameters within the parentheses and within the code block/curly brackets create the function body to be executed when the function is called.
* Once the function has been created, invoke/call the function through the function's name and parentheses - if applicable, include arguments within the parentheses,
*
* 2. A function's parameters act as placeholder variables within the function. When a function is called, arguments are the inputs/values passed to the function's parameters.
*
* 3. A named function consists of: the function keyword, the name of the function, parentheses (which can hold parameters, if applicable), and a code block containing statements that make up the body of the function.
*
* 4. A function can be assigned to a variable by first declaring the variable and assigning an anonymous function to the variable with the assignment operator.
*
* 5. When a function is called, based upon the number of parameters within the function, the call can contain arguments whose values will be assigned to the corresponding parameters.
* Function outputs are determined by the function's return statement. 
* If the function does not have a return statement/specified output, the function will output undefined.
*
* 6. Each function has their own local scope. Typically variables that are function scoped, are unable to be accessed elsewhere in the programming.
* The exception to this rule is that nested ('child') functions have access to the scope of their outer ('parent') functions.
*
* 7. A closure is a function that has/is able to maintain access to it's parent function's variables, even after that parent function has been returned.
*/
 
// 1. Function Phases //
// 1.1 Function Creation
// Functions can be defined with either a function declaration, function expression, or arrow function.
 
function fightMonsters(type){ //example of a function declaration
    if(type === "Vampire"){
        return "Stab him with the pointy end!"
    } else if(type === "Werewolf"){
        return "Grab the gun and the silver bullet!"
    } else if(type === "Basilisk"){
        return "Grab Gryffindor's sword!"
    } else{
        return "Run away!"
    }
 }
  
 // 1.2 Function Call
 // Functions are called/invoked with the function name/reference and parentheses. 
 // If the function contains parameters, arguments are included within the parentheses to take the place of the associated parameter.

 function fightMonsters(type){ //example of a function declaration
    if(type === "Vampire"){
        return "Stab him with the pointy end!"
    } else if(type === "Werewolf"){
        return "Grab the gun and the silver bullet!"
    } else if(type === "Basilisk"){
        return "Grab Gryffindor's sword!"
    } else{
        return "Run away!"
    }
 }

 //Below is the function call 
 console.log(fightMonsters("Baba Yaga")); // prints => "Run away!""
  
 // 2. Parameters vs Arguments //
 //Parameters act as placeholders until arguments are inputted into the function during the function call. 
 //Parameters have the same behavior as variables, and will have the value undefined until the arguments are inputted/'assigned' to the parameter.
 
 var russianMonst = 
 {
     name: "Baba Yaga",
     classification: "witch", 
     houseType: "house has chicken legs"
 }
 var germanMonst = 
 {
     name: "Old Woman",
     classification: "witch", 
     houseType: "house is made of candy"
 } 
 var response = "Holy sh**, that" 

 function monsterDetermination(monster, reaction){ // This function has two parameters: 'monster' and 'reaction' - these two parameters are placeholders until the specific arguments are inputted in the function 
    if(monster.classification === "witch"){
        return `${reaction} ${monster.houseType}!`; 
    }
 }

 //Below 'russianMonst' and 'response' are the arguments/values inputted into the function to take the place of the placeholder parameters: 'monster' and 'reactions'
 console.log(monsterDetermination(russianMonst, response)); // prints => "Holy sh**, that house has chicken legs!"

 //Below 'germanMonst' and 'response' are the arguments/values inputted into the function to take the place of the placeholder parameters: 'monster' and 'reactions'
 console.log(monsterDetermination(germanMonst, response)); //prints => "Holy sh**, that house is made of candy!" 

 // 3. Named Function Syntax //
 // Named functions can be function declarations or function expressions, although function expressions do not have to be named and can be anonymous
  
 function monsterHunting (type){ // monsterHunting is the name of the function and what is used to reference it
    if(type === "Loch Ness"){
     return "Is that a dinosaur?";
    } else if(type === "Yeti"){
       return "What's that hiding in the snow?";
    } else if(type === "Big Foot"){
        return  "Why does it smell like feet?";
    } else{
        "I don't see anything"
    }
 }
  
 console.log(monsterHunting("Big Foot")); // prints => "Why does it smell like feet?""
  
 // 4. Variable Function Assignment //
 // Functions assigned to variables are called function expressions.  
  
 var monsterHunting = function (type){ // fightMonsters is the name of the variable and is what is used to reference the function
        if(type === "Loch Ness"){
         return "Is that a dinosaur?";
        } else if(type === "Yeti"){
           return "What's that hiding in the snow?";
        } else if(type === "Big Foot"){
            return  "Why does it smell like feet?";
        } else{
            "I don't see anything"
        }
    }
   
    console.log(monsterHunting("Loch Ness")); // prints => "Is that a dinosaur?"
  
 // 5. Inputs vs Outputs //
 //Even if a function has multiple return statements, if the conditions for ouputting that return statement are not met, the function will return undefined.
  
 var monsterRepellant = function (type){ //mosterRepellant only has one iput (type) but could have multiple inputs
    if(type === "Werewolf"){
     return "Silver"; //ignores this return statement
    } else if(type === "Vampire"){
       return "Garlic"; //outputs this return statement and stops executing the function
    } else if(type === "Ghost"){
        return  "Salt";
    }
 }

 console.log(monsterRepellant("Banshee")); // prints undefined

 // 6. Scopes //
 //Variables that are declared within these function scopes cannot be seen/used/modified outside of the function.
 //Example 1: 
 var classification = "Monster"; //gobal variable that can still be accessed and used by the function
 var fightMonsters = type => {
    var areTheyScary = "Yes!" //local variable that can only be accessed within the function
    
    return () => {
            if(type === "Frankenstein" && classification === "Monster" && areTheyScary === "Yes!"){ //anonymous function has access to parent scope variable (areTheyScary) and parameter/arg (type)
                return "Grab a torch!"
            } else if(type === "Banshee" && classification === "Monster" && areTheyScary === "Yes!"){
                return "Plug your ears!"
            } else{
                return "Run away!"
            }
        }
 }
    
 console.log(fightMonsters("Banshee")()); // prints => "Plug your ears!"
 console.log(areTheyScary); // error: areTheyScary is not defined

 //Example 2: 

 var companions = ["Rose", "Clara", "Donna"]
 var rankings = {
     1: "the best",
     2: "2nd best",
     3: "the worst"
 }
 function drWho(array, index){ //function #1 is able to access the global scope but is NOT able to access the scopes of function #2 or #3
    var companion = array[index]; //
    return function (key){ //function #2 is able to access the global scope and its parent function's (#1) scope, but is NOT able to access #3's scope
    var rank = rankings[key]
        return function (reason){ //function #3 is able to access the global variables and both its parent functions scopes (#2 and #3) (ie able to access all scopes)
            return `${companion} is ${rank} because she is ${reason}.`; //because it is able to access all parent scopes, it is able to use the variables companion and rank to write out an undisputable truth
        }
    }
 }

console.log(drWho(companions, 1)(3)("so goddamn annoying")); // prints "Clara is the worst because she is so goddamn annoying."
  
 // 7. Closures //
 // Closures preserves the parent function's variables within their local scope.
  
 function monsterNum(num, name){
    var monster = name;

    return function monsterIdentifier(){
        if(num === 666){
            return `It's the ${monster}!`;
        }
    }
 }
  
 var signOfTheDevil = monsterNum(666, "devil"); //outer function invoked
 var beezlebub = signOfTheDevil(); //beezlebub is invoking the inner function monsterIdentifier
 //beezlebub is able to preserve it's parents functions values/variables and so execute
 
 console.log(beezlebub) //prints "It's the devil!"