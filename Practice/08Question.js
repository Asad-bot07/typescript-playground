"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function that accepts a tuple [string, number] and returns a formatted string like: "Name: Asad, Age: 19".
function takeTupe(tupe) {
    return `Name : ${tupe[0]}, Age : ${tupe[1]}`;
}
let tupe = ["Asad", 19];
console.log(takeTupe(tupe));
