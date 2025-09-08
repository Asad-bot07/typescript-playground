"use strict";
// 20. Write a function with a default parameter.
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b = 0) => {
    return a + b;
};
console.log(add(5));
console.log(add(5, 9));
