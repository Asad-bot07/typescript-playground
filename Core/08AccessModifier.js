"use strict";
// Public : it can be accessed outside the class with inside the class
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(name) {
        this.name = name;
    }
}
const obj = new Car("Asad");
console.log(obj.name);
obj.name = "asxuu";
console.log(obj.name);
// Private : it can only be accessed inside the class and not outside the class
class Car1 {
    constructor(name) {
        this.name = name;
    }
}
const obj1 = new Car1("Aizen");
console.log(obj1.name); // throws an error :- Property 'name' is private and only accessible within class 'Car1'.
