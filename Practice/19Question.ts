// 19. Write a function with an optional parameter (example: greet(name?: string)). If no name is passed, return "Hello, Guest".

const greet = (name?: string): string => {
    return `Hello ${name || "Guest"}`
}

console.log(greet());
console.log(greet("Aizen"));

