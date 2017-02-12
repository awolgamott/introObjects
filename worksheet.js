// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

// see test.js for example usage
var tile1 = {
    color: 'blue'
}
var tile2 = {
    color: 'red'
}
var tile3 = {
    color: 'green'
}

var flipColor = function(tile) {
    if(tile['color'] === 'blue'){
    	tile['color'] = 'red'
        return tile
    }
    else if(tile['color'] === 'red'){
    	(tile['color'] = 'blue')
        return tile
    }
    else {
    	return (tile)
    }
}

flipColor(tile2)


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage

var names = [
   {first: 'Bob',
    last: 'Smith'
   },
   {first: 'Bill',
   last: 'Gates'
   },
   {first: 'Jack',
   last: 'Wolgamott'
   }
]

var getFullNames = function(array){
 	var fullNames = []   
    for(var index = 0; index < array.length; index = index +1){
    	var firstName = (array[index]["first"])
        
        var lastName = (array[index]["last"])
        
        fullNames.push(firstName + " " + lastName)
        
    }
    return fullNames
    
}
getFullNames(names)

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage


var speak = function(string){
	var words = string.split(' ')
    var retters = []
    for(var index = 0; index < words.length; index = index + 1){
        var letters = (words[index].split(''))
        letters[0] = 'r'
        retters.push(letters.join(''));
    }
    return retters.join(' ')
}


var generateDog = function(string){
	var dog = {}
    dog['name'] = (string);
    dog['legs'] = 4;
    dog['weight'] = '6 lbs';
    dog['color'] = 'chocolate';
    dog['speak'] =  speak
    return dog
}
// log(generateDog("weezie"))

var dog = generateDog("weezie")


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]


var pluck = function(objects,key){
 	var output = []
    for(var index = 0; index < objects.length; index = index + 1){
    	var value = objects[index][key]
        output.push(value)
    }
    return output
}
pluck(stooges,'name')

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.

var getCounts = function(string){
    
    var words = string.split(' ')
    var output = {}
    for (var index = 0; index < words.length; index = index + 1) {
		var word = words[index]
        if(output[word]){
        (output[word]) = (output[word] +1)
		}
		else {
			output[word] = 1
		}  
    }
    return output
}
getCounts('cool cool cool fool tool rule cool')


// check test.js for examples of how this function should be used.

// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

