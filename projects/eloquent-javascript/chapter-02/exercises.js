
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {

  for (let line = "#"; line.length <= num; line += "#") 
  //first value printed will be "#", line length is less than num so it iterates and concats #
  //second value will be ##, line length is less than num so it iterates and concats #
 //etc

console.log(line);  //for each iteration the line is printed 

}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // YOUR CODE GOES BELOW HERE //
  for(var i = start; i <= end; i++){ //iterating from start arg to end arg
    let output = ""; //string output for when need to log fizz buzz fizzbuzz
    if(i % 3 === 0) output += "fizz"; //if divisible by 3 output is equal to fizz
    if(i % 5 === 0) output += "buzz";  //if divisible by 5 output is equal to fizz
    console.log(output || i) //since values are put in the or statement, if first value === false will output n instead 
    //empty strings are a falsy value so if neither if statement assigns output a string. Output will be false 
  }
  // YOUR CODE GOES ABOVE HERE //
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function drawChessboard(size) {

  let board = "";
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += (" ");
      } else {
        board += ("#");
      }
    }
   board += "\n";
  }
    
  console.log(board);
  
  }
  
//first it - y = 0, x = 0 -> " "
// -> "#"
//keeps on going until hits width

//second it y = 1 x = 0
// -> #

//first iteration determines length - for each length index - determines width
//second iteration makes line

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
