"use strict";
/* Continuation of Qs 16
 Create two types: Person (name: string) and Employee (id: number). Make a new type that combines both using intersection (&).
 17. Write a function that accepts this combined type and returns a string with both name and id.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const emp = {
    name: "asad",
    id: 1542,
};
console.log(emp.id, emp.name);
const check = (obj) => {
    return `${obj.name} id is : ${obj.id}`;
};
console.log(check(emp));
