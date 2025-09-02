"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the keyword public is an access specifier which make sure that the var can be accesed by the user outside the class
class Factory {
    constructor(product, price) {
        this.product = product;
        this.price = price;
        console.log(product);
        console.log(price);
    }
}
// Constructor is nothing but a function which gets automatically called when created a object
const Samsung = new Factory("A55", 43000);
