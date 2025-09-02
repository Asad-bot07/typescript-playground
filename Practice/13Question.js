"use strict";
// Create an interface Product with properties id, name, and price. Write a function that returns "Product: name, Price: price".
Object.defineProperty(exports, "__esModule", { value: true });
function isProduct(obj) {
    return `Product : ${obj.name}, Price : ${obj.price}`;
}
const Item = {
    id: "A12q",
    name: "HP Victus",
    price: 85000
};
console.log(isProduct(Item));
