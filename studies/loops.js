/**
* LOOPS
* 0. Loops are used to run the same code as many time as is needed and iterate through date.
* A loop will continue running until the condition returns false
* If there is no condition to stop the loop, the code will be stuck in an infinite loop error
*
* 1. while Loops loop through and execute a block of code as long as a specified condition is true
*
* 2. for Loops loop a fixed number of times until a specified condition evaluates to false. 
*
* 3. for-in Loops iterate through an object and pulls out each key of the object
*/
 
// 1. while Loops //
// while loop syntax is made up of the expression to be evaluated before each loop iteration and the statements to be executed each time the expression is evaluated as true.  
 
// 1.1 while Loop Forwards
function allTogetherNow(num){
   while(num <= 11){
       if(num === 5){
           console.log("Can I have a little more?");
           console.log(5);
       }else if(num === 11){
           console.log("I love you!")
       }else{console.log(num);
       };
       num++
    }
}

console.log(allTogetherNow(1)); //prints => 1 2 3 4 "Can I have a little more?" 5 6 7 8 9 10 "I love you!"
 
// 1.2 while Loop Backwards
function newYears(num){
   while(num >= 0){
       if(num === 0){
           console.log("Happy New Years!")
       }else{console.log(num);
       };
       num--
    }
}

console.log(newYears(10)) //prints => 10 9 8 7 6 5 4 3 2 1 "Happy New Years!"

// 2. for Loops //
//for Loops are most commonly used to iterate through an array index.
//for Loops are made up of an initialization statement that defines the loop variable, a condition statement that tells the loop when to stop, incrementation expression that increments/decrements your loop counter.
 
// 2.1 for Loops Forwards
var names = ["Marvin Gaye", "Gladys Knight", "Al Green", "Tammi Terrell"]
var motownArtists = [];
for(var i = 0; i < names.length; i++ ){
   motownArtists.push(names[i]);
}

console.log(motownArtists); // prints => ["Marvin Gaye", "Gladys Knight", "Al Green", "Tammi Terrell"]

// 2.2 for Loops Backwards Over an Array
var names = ["Marvin Gaye", "Gladys Knight", "Al Green", "Tammi Terrell"]
var motownArtists = [];
 
for(var i = names.length; i >= 0; i-- ){
   motownArtists.push(names[i]);
}
 
console.log(motownArtists); // prints => ['Tammi Terrell', 'Al Green', 'Gladys Knight', 'Marvin Gaye']
 
// 3. for in Loops //
var artist = {
   name: "Al Green",
   addOcc: "pastor",
   faveSongs: ["Take Me to The River", "Love", "I Can't Get Next to You"]
}

var artistValues = [];  
for(var key in artist){
    artistValues.push(artist[key]);
}

console.log(artistValues) // prints [ 'Al Green','pastor', ['Take Me to The River', 'Love', 'I Can't Get Next to You' ] ]


