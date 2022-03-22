// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = (greeting, location, time) => console.log(`${greeting} ${location} ${time}`); 
;

// 2.
var contestants = array => array.length; 


// 3.
var filterSpecies = dogs.filter(dog => dog.species === "dog");  //look back on filter!)
// 4. 
var dogContestants = [...filterSpecies]; //make sure with spread you're including [] or {} encasing what you're spreading

// 5. 
var dogsWithClasses = dogContestants.map(dog => {
    if(dog.weight <= 10){
        dog.class = "red"; 
    } else if(dog.weight <= 20){
        dog.class = "yellow"; 
    } else{
        dog.class = "green"; 
    }
    return dog; //this is what i had wrong.. just needed to return dog to put it in the map i guess...
}); 
    
// 6.
var firstInClass = (arr, obj={}) => {

    if(arr.length === 0){
        return obj; 
    } 
        
    Object.assign(obj, arr[0]) //target, new obj
    return firstInClass(arr.slice(1), obj);
};

//want to return an object combined 
//{}
//{dog1}
//{dog1, dog2}
//return {dog1, dog2, dog3}

//dog1, dog2, dog3
//dog1, dog2
//dog1
//0 -> return {}




// 7.
var votes = dogs.reduce((accum, dog) => {

    return accum + dog.votes;

}, 0)