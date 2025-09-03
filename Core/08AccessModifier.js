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
// Protected
// Protected is nothing but like private but it'll also be accessible in the extended class and not outside the class
class Mobile {
    constructor() {
        this.nm = "Samsung";
    }
}
class Model extends Mobile {
    constructor() {
        super(...arguments);
        this.model = "A55";
    }
    change() {
        this.nm = "Apple";
    }
}
const object = new Model();
// Bonus
// If you want to change the value of a var in a class use "readonly" keyword
class Laptop {
    constructor(brand = "HP", price) {
        this.brand = brand;
        this.price = price;
        console.log(this.brand, this.price);
    }
}
const obj4 = new Laptop("", 150000);
