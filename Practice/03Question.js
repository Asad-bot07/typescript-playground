"use strict";
// What is the difference between any and unknown in TypeScript? Write an example to show it.
Object.defineProperty(exports, "__esModule", { value: true });
// Any datatype can be a universal datatype which can have any datatype based on its value without type checking
// Unknown datatype is same as Any datatype but with typechecking before using its value
let n = "Asad";
console.log(n.toLowerCase());
let n1 = "Asad";
console.log(n1.toLowerCase()); //error before compiling
