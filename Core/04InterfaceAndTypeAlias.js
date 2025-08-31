"use strict";
// Interface; it makes the blueprint/alias of an var for its datatype
Object.defineProperty(exports, "__esModule", { value: true });
// obj : User means obj is like User as a datatype as obj = User = name,age,email
function getUser(obj) {
    console.log("Runned");
    obj.age;
    obj.email;
    obj.name;
}
getUser({ name: "Asad", age: 19, email: "Hussain" });
function getInfo(obj) {
    console.log(obj.gender);
}
getInfo({ name: " Asad", age: 19 });
getInfo({ name: "Asad", age: 19, gender: "Male" });
function test(obj) {
    obj.age; // from the first interface
    obj.course; // from the second interface
}
let a;
let smth;
function anth(obj) { } // it can take either number,string or null
