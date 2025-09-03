"use strict";
// Getter :- it is notihng but a func in a class which takes input out from the function
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(_name, price) {
        this._name = _name;
        this.price = price;
    }
    get name() {
        return this._name;
    }
}
