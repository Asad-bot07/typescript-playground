"use strict";
// 19. Write a function with an optional parameter (example: greet(name?: string)). If no name is passed, return "Hello, Guest".
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => {
    return `Hello ${name || "Guest"}`;
};
console.log(greet());
console.log(greet("Aizen"));
