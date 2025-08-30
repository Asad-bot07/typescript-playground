"use strict";
/*Basic types
1. primitive types (number, string, boolean)
2. Arrays
3. Tuples
4. Enums
5. Any, Unknown, Void, Null, Undefined, Never
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* Primitive        and            Reference
       |                                \
Built in data types                      \
Number,string,boolean          User-Defined data types
                               eg. Array..
*/
// Array
let arr = [1, 1, 3, 4, 5, { name: "harsh" }]; //in js
let arr1 = [1, 2, 3]; //in ts
// Tuples
// same as array just we need to define beforehand the number of element with their data types
let arr2 = ["Asad", 19]; // ✅
//let arr33:[number,string] = ["Asad",19] // ❌
// enums; enumerations
//just like obj but it's upgraded version takes key:value pairs can use where we use certain thing in multiple areas
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["Guest"] = "guest";
    UserRoles["Super_Admin"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["abandoned"] = "abandoned status code";
    StatusCode["NotFound"] = "not found status code";
})(StatusCode || (StatusCode = {}));
// Any; when a variable is declared but the type is not defined it's any, it's the by default datatype  
let a = 5; // number
let b = "Asad"; // defined as string no other datatype can be stored
// unknown; we don't know the type of the a datatype but for using it should check it's datatype first
let a1;
a1 = 12;
// a1 = "Asad"
//a1.toLowerCase() // when it's any
// type narrowing
// if(typeof a1 === "string"){
//        a1.
// }
// void; return nothing so put void just as normal languages
/*for eg:

void My_Name(){
       System.out.println("Nothing return")
}
so in typescript we have to define the datatype what the function is returning just as java,c,c++...etc
*/
function abcd() {
    console.log("Asad is Great!");
}
// Null
let none;
let num = [1, 2, 3, 4, 5];
let search = 7;
// if search not in num then return none=null
// Undefined same as js when a var is not defined or empty
// Never; return nothing and will never return
function abcde() {
    while (true) { }
}
abcde();
console.log("WIll not run"); // this line will never execute because abcde will never return
