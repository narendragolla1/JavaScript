/**
 *          Proto: Inheritance in JavaScript
 *          -----
 */

var a = {
        x: 10,
        calculate: function(z) {
            return this.x + this.y + z;
        }
    }
    // how do get reference of a into b?
var b = {
    y: 20,
    __proto__: a, // proto is like a pointer in cpp.
    // the proto will point to a, everything that is in "a" can be refernce in b
    // proto is the special properties that is available in each instance
    // every object have one proto.

}

var c = {
    y: 30,
    __proto__: a,
}


// proto chain that key looking for value. 
// intial value is given preference, and later proto 
// no relation between a, b and c


console.log(b.calculate(30)); // 10+20+30
console.log(c.calculate(30)); // 10+30+30
console.log(a.calculate(30)); // in a there is no y that is why it is returning NaN





































//