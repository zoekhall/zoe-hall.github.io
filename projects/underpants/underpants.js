// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
var _ = {};
/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/
/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = (function(value){
    return value; 
})
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (val){
    if(Array.isArray(val)){
        return "array";
    } else if(val === null){
        return "null";
    } else{
        return typeof val; 
    }
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(arr, num){
    var newArr = []; 

    if(num === undefined || num === NaN){
        return arr[0];
    } else if(Array.isArray(arr) === false || num <= 0){
        return []; 
    } else if(arr.length < num){
        return arr; 
    } else{
        for(var i = 0; i < num; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr; 
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
var newArr = []; 
if(num === undefined || num === NaN){
    return arr[arr.length - 1];
} else if(Array.isArray(arr) === false || num <= 0){
    return []; 
} else if(arr.length < num){
    return arr; 
} else{
    for(var i = arr.length - 1; i >= arr.length - num; i--){
        newArr.unshift(arr[i]);
    }
}
return newArr; 
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, val) {
//iterate through the input array
    for(var i = 0; i < arr.length; i++){
        //determine if the current value in the array, matches the input value
        if(arr[i] === val){ 
            return i; 
        }
    }
return -1; 
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, val){
var count = 0; 
    for(var i = 0; i < arr.length; i++){
        arr[i] === val ? count += 1 : count += 0
    }
    return count > 0 ? true : false; 
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collect, func){
    if(Array.isArray(collect)){
        for(var i = 0; i < collect.length; i++){
            func(collect[i], i, collect);
        }
    } else{
        for(var key in collect){
            func(collect[key], key, collect)
        }
    }
}
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    //create new array to store result
    var newArr = [];
    var index = []; //0, 0, 2, 0
    //loop through array
    for (var i = 0; i < array.length; i++) {
        index.push(_.indexOf(array, array[i]))
        if(index.includes(i)) {
             newArr.push(array[i]);
        }
    }
     return newArr;
}
//[1, 1, 4, 1]
//i = 0 -- value arr[0] = 1 -> indexOf(arr, 1) = if(arr[0] === 1) return 0 TRUE equals 1
//i = 1 -- value arr[1] = 1 -> indexOf(arr, 1) = if(arr[0] === 1) return 0 TRUE equals 1
//i = 2 -- value arr[2] = 4 -> indexOf(arr, 4) = if(arr[0] === 4) return 0 FALSE equals 1
//i = 2 -- value arr[2] = 4 -> indexOf(arr, 4) = if(arr[1] === 4) return 1 FALSE equals 1
//i = 2 -- value arr[2] = 4 -> indexOf(arr, 4) = if(arr[2] === 4) return 2 TRUE equals 4

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,3,3,5,5], function(x){return x%2 === 0}) -> []
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === true){
           newArr.push(arr[i]);
       }
    }
    return newArr; 
    }

//filter - collection, and a function to test against each element - if result of test = true -> to new array 
//each - collection and a function to be applied to each element - doesn't have a return just changes element 

//each - input array -> it's iterating over each element (don't need for loop)
//function to be applied to each element 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, func){
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === false){
           newArr.push(arr[i]);
       }
    }
    return newArr; 
    }
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
    var truthArr = []; 
    var falseArr = []; 
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === true){
           truthArr.push(arr[i]);
       } else if(func(arr[i], i, arr) === false){
            falseArr.push(arr[i]);
       }
    }
return [truthArr, falseArr];
}
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collec, func){
    var newArr = []; 
    if(Array.isArray(collec)){
        for(var i = 0; i < collec.length; i++){
            newArr.push(func(collec[i], i, collec));
        }
    } else{
        for(var key in collec){
            newArr.push(func(collec[key], key, collec))
        }
    }
    return newArr; 
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arr, prop){
var newArrs = []; 
var finalArr = []; 
for(var i = 0; i < arr.length; i++){ //isolate each object
    newArrs.push(_.map(arr[i], function (value, key){
        if(key === prop){
            return value; 
        }
    }))
}
for(var i = 0; i < newArrs.length; i++){
    finalArr.push(newArrs[i].join(""))
}
return finalArr; 
}
//1) isolate each object within the array 
//2) in each object identify the given key (prop)
//3) return that key's property value 
//4) push that key's property value to a new array 
//5) return the new array 
//MAIN 
//iterates through the array - isolating each object
//MAP FOR EACH OBJECT
//iterates through the object
//for each key/value pair within the object, map calls the function with (collec[key], key, collec) as the parameters 
//pushes each function result to new array
//returns that array 
//MAIN 
//map returns array of key value 
//array of key value is pushed to a new array (newArrs)
//now have an array with array subsets - need to combine to make a normal array 
//return that normal array 
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean DON'T WORRY 
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {
//determine if no function has been passed in 
if(func === undefined){ // can also use bang operator (!func) < - if func resolves to something falsely 
        // determine if collection is array 
    if(Array.isArray(collection)){
        //iterate through array 
        for(var i = 0; i < collection.length; i++){
            //determine if the current array value is truthy or falsey
        if(!collection[i]){ //if the current value is falsey 
            return false;
        }
        } 
    } else{
        for(let key in collection){
            if(!collection[key]){
                return false; 
            }
        }
    }
} else { // else a function has been passed in 
    //determine if collection is an array 
    if(Array.isArray(collection)){
        //iterate through the array 
        for(let i = 0; i < collection.length; i++){
            //pass the currect array value, the current index, and the collection into the
            //input function as arguments
            //if the result of that invocation is false
            if(!func(collection[i], i, collection)){
                return false; 
            }
        }
    }
    else { //else it's an object
        for(let key in collection){
            if(!func(collection[key], key, collection)){
                return false; 
            }
        }
    }
}
return true; 
}
//boolean flag variable look it up! 
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
        
    var count = 0; 

    //determine if no function has been passed in 
        if(func === undefined){ // can also use bang operator (!func) < - if func resolves to something falsely 
                // determine if collection is array 
            if(Array.isArray(collection)){
                //iterate through array 
                for(var i = 0; i < collection.length; i++){
                    //determine if the current array value is truthy or falsey
                if(collection[i]){ //if the current value is falsey 
                    count += 1;
                }
                } 
            } else{
                for(let key in collection){
                    if(collection[key]){
                        count += 1; 
                    }
                }
            }
        } else { // else a function has been passed in 
        
            //determine if collection is an array 
            if(Array.isArray(collection)){
                //iterate through the array 
                for(let i = 0; i < collection.length; i++){
                    //pass the currect array value, the current index, and the collection into the
                    //input function as arguments
                    //if the result of that invocation is false
                    if(func(collection[i], i, collection)){
                        count += 1; 
                    }
                }
            }
            else { //else it's an object
                for(let key in collection){
                    if(func(collection[key], key, collection)){
                        count += 1; 
                    }
                }
            }
        }
        
        if(count > 0){
            return true; 
        } else{
            return false; 
        }
        
        
        }



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(arr, func, seed){

    var result; 
    
    if(seed === undefined){
        let firstIteration = func(arr[0], arr[1], 1);
        var result = firstIteration; 
        for(let i = 2; i < arr.length; i++){
            var result = func(result, arr[i], i);
        }
    } else if(seed === 0){
        result = 0;
    } else{
        let firstIteration = func(seed, arr[0], 0); 
        var result = firstIteration; 
        for(let i = 1; i < arr.length; i++){
            var result = func(result, arr[i], i);
        }
    }
    
    //Seed Present --- use seed as the prev result
    
    //next... iteration - func return value as the prev result
    
    //last iteration - return the return value of the final func 
    return result; 

    }

//spread operator
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object){
    for(var i = 0; i < arguments.length; i++){
        Object.assign(object, arguments[i]); 
        }
        return object; 
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}