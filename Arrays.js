/** 
 *                  ARRAYS
 *                  -------
 */
// JS it is and it will work... lol (it wont work in c or cpp)
// it is similar to python.
var a = [1, 2, 3, function() {}, "used"];
// everything in JS is object: object can have key value pair. value can be anything.

console.log(a);
// o/p: [ 1, 2, 3, [Function (anonymous)], 'used' ]
/**
 * 0:1
 * 1:2
 * 2:3
 * 3:f(){}
 * 4:"used"
 */
console.log(typeof(a)); //o/p: ofc it is an object..!
var a = []; // one way to create an array.
// a is empty array.
var b = new Array(3); // Array is the constructor and  3 is the size of the array.
// new means we are creating new istance of class which is b object.
// b is an array of size 3
console.log(b);
/**
 * 0:undefined
 * 1:undefined
 * 2:undefined
 */



console.log(a.length); // o/p: 0 for empty array


var a = [1, 2, 3, 4, 5];
// to empty this array.
// a=[]
console.log(a); // this will make my array empty.

var b = a; // this will be assign by reference  (both are pointing same objects)
a.pop(); // this will remove the last element.
console.log(a);
console.log(b);

// what if i do like this...
a = []
console.log(b); //op: [1,2,3,4]
// a is empty and b is not empty why is this happening ?
// now a is pointing to empty array but b is still pointing to previous array.


// Garbage collection: if memory location is rechable (********need to look into it.***)


// how do i make b also empty....
a = [1, 2, 3, 4];
var b = a;
a.length = 0;
// both a and b are pointing to same object which is empty...
// length is property of array.

// what would happen if i make a.length=10;
a.length = 10;
console.log(a);
//o/p: [1,2,3,4,undefined,undefined,undefined,undefined,undefined,undefined,undefined]