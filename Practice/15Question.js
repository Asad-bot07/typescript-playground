"use strict";
// Write a function that accepts either a string or a number (union type) and returns a string.
Object.defineProperty(exports, "__esModule", { value: true });
function CheckEmail(email) {
    return `${email} is the input`;
}
console.log(CheckEmail("Asad123")); // Asad123 is the input
console.log(CheckEmail(123456)); // 123456 is the input
