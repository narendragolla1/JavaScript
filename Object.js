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