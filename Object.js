/**
 *          OBJECT
 *          ------
 */

// Declaration
var a = {};
var b = new Object();

// defining an object
var obj = {
    a: 10,
    b: 20,
    c: function() {
        console.log("Hi")
    },
    d: [1, 2, 3, 4],
    e: {

    }
}

// access a value
console.log(obj.a);
console.log(obj["a"])

// Why do we need two ways.
// because when we have dynamic key (key change)
var z = "d";
console.log(obj.z); //o/p: in this case we get undefined.
console.log(obj[z]); // O/p: this will return array of [1,2,3,4]
// console.log(obj["d"]) the above statement is convereted into this way and o/p would be array.
// if do like this 
obj.z = 2;
// z is the new key created in our object and it is appended in last.
console.log(obj);
// { a: 10, b: 20, c: [Function: c], d: [ 1, 2, 3, 4 ], e: {}, z: 2 }


var dog = {
    name: "tom",
    breed: "lab",
    bark: function() {
        console.log(" bow bow");
    },
}
dog.bark();

// This line defines a constructor function named Dog. 
//Constructor functions are used to create multiple objects with the same structure. 
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.bark = function() {
        console.log("bow bow");
    }
}
// This line creates a new object named dog1 using the Dog constructor. 

var dog1 = new Dog("snoop", "high");
console.log(dog1)
console.log(dog1.bark()) // o/p: undefined (bark is private function.)
console.log(dog1) // Dog { name: 'snoop', breed: 'high', bark: [Function (anonymous)] }

dog1.bark2 = function() {
    console.log("bark")
}
console.log(dog1)

/** 
 * 
 * the modified code creates a Dog object named dog1 using the constructor, 
 * assigns a new method bark2 to dog1, and then logs the dog1 object to the console,
 * which includes its properties and the added bark2 method.
 * 
 * o/p:
 * Dog {
  name: 'snoop',
  breed: 'high',
  bark: [Function (anonymous)],
  bark2: [Function (anonymous)]
}
 */