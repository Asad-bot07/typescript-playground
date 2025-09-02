"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor() {
        this.model = "BMW m3";
        this.Show = () => {
            console.log(this.model); // for accessing members(var/func) which is defined/declared in a class we need "this" keyword
        };
        this.Show2 = () => {
            this.Show(); // same for calling the function
            console.log("func 1 is called");
        };
        this.Show3 = () => {
            let name = "Asad";
            this.Show2();
            console.log(name); // variables defined and declared inside a method of the class can directly be accessed without using "this" keyword
        };
    }
}
class Factory {
    constructor(name) {
        this.name = name;
    }
}
