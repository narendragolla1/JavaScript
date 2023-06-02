/*
JAVASCRIPT
----------

-> javascript is client side programming language.
->fucntional programming language and lambda langauge
->loosely and dynamically typed: 
Eg: var a=5;
    we dont write int,float,char that is why we call it as loosely typed language
    a="hello";
    we have change the data type of the a variable when we compiled it will dyanmically change the 
    the datatype to string.
     

    Data types
    ----------
        1. Number
        2. string
        3. Boolean
        4 Undefined
        5.Null


            Eg: var a=10;
            var b="hello";
            var c=true;

            Null in js means there is no value.
            we have to assign NUll value to it::: var null_vari=null;
            Undefined in js means we didn't define value.


            To know the type of the variable:
            typeof return in string format
            console.log(typeof(a)); o/p: number
            typeof null would be: Object  
            typeof underdefined would be: undefined

                ** everything in Js is object **

                
    console.log(2=="2")

    o/p: true : Js will convert string "2" to 2 implicity (type coercion) only values are compared not the types : 2==2 ( converted )
    js dont check type it will check values only.

    if we want to compare type also--> console.log(2==="2")
    we use === for checking type of the given.
    console.log(null==undefined) o/p: true
    console.log(null===undefined) o/p: false the types are differnt one is object(null) and other is NaN        

    console.log(+"2") o/p: 2 (this is converted into number data type explicity )
    console.log("xyx"+"abc"); o/p: xyzabc (this will concat the two strings)
    console.log("2"+"3"); o/p: 23
    console.log("2"+" "+3) o/p: 23 (2 is string and 3 is number, number is converted into string and concat with 2)
    console.log(+"2"+"3") o/p: 5 (not conversion is happenen here)
    console.log("2"+3) o/p: 23 (string + concat is with number it converts the number to string and concat)
    console.log("2"+"xyz"); o/p: 2xyz 
    console.log(2+3+"xyz"); o/p : 5xyz (+ will go from left to right and then it saw string and it concat with that string..!)
    console.log(-"2"+-"3"); o/p: -5 (since we had - sign infornt of string it is converted into -ve number)
    -> when we have - or + infornt of string having value number it will convert it into number type.
    console.log(1+"null"); o/p: 1 (null is converted into 0 and added to 1 )
    console.log(1+undefined); o/p: NaN(undefined is nan and it is not object, undefined is not converted into zero)


    var l=+"abc"; // l become NaN
    console.log(l==l);
    o/p: fasle (nan==nan return false)
    NaN != NaN (only nan is not equal to nan because nan can any number)
    console.log(isNaN(l)); o/p: true
    console.log(-2+-3) ; o/p: -5
    console.log(1+true); o/p: true (true is converted into to 1 and added to 1)
    console.log("2"-"3"); o/p: -1 


    console.log(+"abc"); o/p: NaN (im not able to convert in to number that is why we are getting NaN)

    console.log(1+null); o/p: 1 (null is converted into 0 and added to 1)
    console.log("1"+null); o/p: 1null (null is converted into string type and concat with 1)


       
    
    






*/
var a = 10;
var b = "hello";
var c = true;
console.log(a);
console.log(b);
console.log(c);
console.log(typeof(a));
console.log(typeof(b));