//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function objectValues(object) {
    var arr = []; 
        for(var key in object){
        arr.push(object[key]); 
    }
    return arr; 
    } 
    //////////////////////////////////////////////////////////////////////
    // Function 2 - Keys to String ///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function keysToString(object) {
    var arr = [];
    for(var key in object){
        arr.push(key); 
    }
    return arr.join(" "); 
    }
    //////////////////////////////////////////////////////////////////////
    // Function 3 - Values to String /////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function valuesToString(object) {
        var arr = []; 
        for(var key in object){
        if(typeof object[key] === "string"){
            arr.push(object[key]); 
    }
        }
    return arr.join(" "); 
    }
    //////////////////////////////////////////////////////////////////////
    // Function 4 - Array or Object //////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function arrayOrObject(collection) {
        if(true === Array.isArray(collection)){ //remember the formatting for Array.isArray()
            return "array";
        } else if(typeof collection === "object" && collection !== null && collection instanceof Date === false){
            return "object"; //remember the formatting for instanceof
        }
    }
    //////////////////////////////////////////////////////////////////////
    // Function 5 - Capitalize Word //////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function capitalizeWord(string) { //"hey"
    //remember charAt() + can use toUpperCase with a string + slice for a string - slice return string STARTS at the index indicated, it does not delete the index indicated
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //////////////////////////////////////////////////////////////////////
    // Function 6 - Capitalize All Words /////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function capitalizeAllWords(string) {
    var arr = string.split(" "); 
    var newStrArr = []; 
    for(var i = 0; i < arr.length; i++){
        newStrArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newStrArr.join(" ");
    }
    //arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) --- return arr[i]; (arr[i] reference and not a value)
    //////////////////////////////////////////////////////////////////////
    // Function 7 - Welcome Message //////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function welcomeMessage(object) {
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
    }
    //////////////////////////////////////////////////////////////////////
    // Function 8 - Profile Info /////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function profileInfo(object) {
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    var species = object.species.charAt(0).toUpperCase() + object.species.slice(1)
    return name + " is a " + species;
    }
    //////////////////////////////////////////////////////////////////////
    // Function 9 - Maybe Noises /////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function maybeNoises(obj) {
        if("noises" in obj === true){
            if(obj.noises.length > 0){
                return obj.noises.join(" ");
            } else if(obj.noises.length === 0){
                return 'there are no noises';
            }
        } else{
            return "there are no noises";
        }
    }
    // noises no noises [] return 'there are no noises'",
    //////////////////////////////////////////////////////////////////////
    // Function 10 - Has Words ///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function hasWord(string, word) {
    return string.includes(word);
    }
    //////////////////////////////////////////////////////////////////////
    // Function 11 - Add Friend //////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function addFriend (name, object) {
    var arr = object.friends; 
    arr.push(name);
    return object; 
    }
    //////////////////////////////////////////////////////////////////////
    // Function 12 - Is Friend ///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function isFriend(name, object) {
    if("friends" in object){
    return object.friends.includes(name);
    }
    return false; 
    }
        
    //////////////////////////////////////////////////////////////////////
    // Function 13 - Non-Friends /////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function nonFriends(name, array) { 
        var allNames = []; 
        var friends = [name]; 
        var noFriends = []; 
  
        for(var i = 0; i < array.length; i++){
          allNames.push(array[i].name);
          if(array[i].name === name){
            friends.push(...array[i].friends);
          }
        }
  
        for(var i = 0; i < allNames.length; i++){
          if(!(friends.includes(allNames[i]))){
            noFriends.push(allNames[i]);
          }
        }
  
  
        return noFriends; 
        
          }
    
    //return a list of all the names that <name> is not friends with
    
    //////////////////////////////////////////////////////////////////////
    // Function 14 - Update Object ///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function updateObject(obj, key, value) {
        var obj; 
        obj[key] = value; 
        return obj; 
        }


    //Should update the property <key> on <object> with new <value>. 
    //If <key> does not exist on <object> create it.


    //////////////////////////////////////////////////////////////////////
    // Function 15 - Remove Properties ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function removeProperties(object, array) {
        for(var i = 0; i < array.length; i++){
            if(array[i] in object){
                delete object[array[i]];
            }
        }
    }
    //Should remove any properties on <object> that are listed in <array>
    //////////////////////////////////////////////////////////////////////
    // Function 16 - Dedup ///////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    function dedup(array) {
        var newArr = []; 
            for(var i = 0; i < array.length; i++){
                if(!(newArr.includes(array[i]))){
                    newArr.push(array[i]);
                }
                }
    return newArr; 
    }

    //////////////////////////////////////////////////////////////////////
    // DON'T REMOVE THIS CODE ////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    if((typeof process !== 'undefined') &&
       (typeof process.versions.node !== 'undefined')) {
        // here, export any references you need for tests //
        module.exports.objectValues = objectValues;
        module.exports.keysToString = keysToString;
        module.exports.valuesToString = valuesToString;
        module.exports.arrayOrObject = arrayOrObject;
        module.exports.capitalizeWord = capitalizeWord;
        module.exports.capitalizeAllWords = capitalizeAllWords;
        module.exports.welcomeMessage = welcomeMessage;
        module.exports.profileInfo = profileInfo;
        module.exports.maybeNoises = maybeNoises;
        module.exports.hasWord = hasWord;
        module.exports.addFriend = addFriend;
        module.exports.isFriend = isFriend;
        module.exports.nonFriends = nonFriends;
        module.exports.updateObject = updateObject;
        module.exports.removeProperties = removeProperties;
        module.exports.dedup = dedup;
    }