// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { toNumber } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./zoe-hall.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter(customer => {
       return customer.gender === "male"
    }).length
};

var femaleCount = function(array) {

    return array.reduce(function(prevVal, currVal){
        if(currVal.gender === "female" ){
            prevVal += 1; 
        }
        return prevVal; 
    },0)
}

var oldestCustomer = function(array){

const oldPerson = array.reduce(function(prevVal, currVal){
        if(prevVal.age > currVal.age){
            return prevVal; 
        } else{
            return currVal; 
        }
    });

    return oldPerson.name; 

}

var youngestCustomer = function(array){
    const youngPerson = array.reduce(function(prevVal, currVal){
        if(prevVal.age < currVal.age){
            return prevVal; 
        } else{
            return currVal; 
        }
    });

    return youngPerson.name; 

};

var averageBalance = function(array){

const balances = array.map(customer => customer.balance).map(balancia => balancia.slice(1)).map(sliced => sliced.replace(",", "")); 
const sans$ = [];
for(let i = 0; i < balances.length; i++){
    sans$.push(+balances[i]);
}
const sum = sans$.reduce(function(prevVal, currVal){
    return prevVal + currVal; 
}, 0)

return sum / array.length; 

}

var firstLetterCount = function(array, letter){

const firstLet = array.map(customer => customer.name[0].toLowerCase());
const smallLet = letter.toLowerCase(); 
const compare = firstLet.filter(function(custLet){
  return smallLet === custLet;
  })
return compare.length;
}

var friendFirstLetterCount = function(arr, custName, letter){
    const smallLet = letter.toLowerCase(); 
    const customer = arr.filter(function(customer)
    {return customer.name === custName});
    const friendArr = customer[0].friends; 
    const compare = friendArr.filter(friend => (friend.name[0].toLowerCase()) === smallLet);
    
    return compare.length; 
     
   }

var friendsCount = function(arr, name){
//need to iterate through each customer's friends
//if the customer has a friend matching the name parameter - customer name needs to be pushed into an array 
const nameArr = []; 
for(let cust = 0; cust < arr.length; cust++){ //i = each customer 
    let friendsArr = arr[cust].friends;
    for(let friend = 0; friend < friendsArr.length; friend++){
        if(friendsArr[friend].name === name){
            nameArr.push(arr[cust].name)
        }
    }
}

return nameArr; 

};

var topThreeTags = function(array){

    var tags = array.map(customer => customer.tags); //array of sub arrays of each customers tags 
    var allTags = tags.reduce((prev, curr) => {
        return prev.concat(curr); //all of the sub arrays in tags flattened into one array 
    }, [])
    
    var tagObj = allTags.reduce((prev, curr, index) => {
      prev[curr] ? prev[curr] += 1 : prev[curr] = 1; 
    return prev;
      },{}) //have an object with how many times each tag appeared...
    
    var newArr = [];     
    for(var key in tagObj){     
     newArr.push([key, tagObj[key]]);        
    } 
    
    var objArr = []
    for(let i = 0; i < newArr.length; i++){
      let newObj = {};
      newObj.name = newArr[i][0];
      newObj.num = newArr[i][1]; 
      objArr.push(newObj); 
    }
     
    
for (var i = 1; i < objArr.length; i++)
    for (var j = 0; j < i; j++)
        if (objArr[i].num < objArr[j].num) {
          var x = [objArr[i].name, objArr[i].num];
          [objArr[i].name, objArr[i].num] = [objArr[j].name, objArr[j].num];
          [objArr[j].name, objArr[j].num] = x;
        }
        
return [objArr[objArr.length - 1].name, objArr[objArr.length - 2].name, objArr[objArr.length - 3].name]; 

};

var genderCount = function(array){

    var genders = array.map(customer => customer.gender); //array of each customers gender
    var genderObj = genders.reduce((prev, curr) => {
      prev[curr] ? prev[curr] += 1 : prev[curr] = 1; 
      
    return prev;
      },{})

      return genderObj; 

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
