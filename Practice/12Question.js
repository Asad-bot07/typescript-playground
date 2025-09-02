"use strict";
// 12. Write a function that accepts a User type and returns a greeting string.
Object.defineProperty(exports, "__esModule", { value: true });
function greet(obj) {
    if (obj.isAdmin)
        return `Hello ${obj.name}(Admin Sahab!!`;
    return `Hello ${obj.name} !!`;
}
const cust = {
    name: "Asad",
    isAdmin: true
};
console.log(greet(cust));
