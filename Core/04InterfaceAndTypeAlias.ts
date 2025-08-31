
// Interface; it makes the blueprint/alias of an var for its datatype

interface User{
    name : string,
    age : number,
    email : string
}

// obj : User means obj is like User as a datatype as obj = User = name,age,email

function getUser(obj : User){
    console.log("Runned");
    obj.age;
    obj.email;
    obj.name;
}

getUser({name:"Asad",age:19,email:"Hussain"});


interface info{
    name:string,
    age:number,
    gender?:string // ? means it can get gender or not like a opt so we use ?
}

function getInfo(obj:info){
    console.log(obj.gender);
}

getInfo({name: " Asad",age: 19})
getInfo({name : "Asad",age : 19,gender: "Male"})

/*
undefined // on first call
Male // on second call
*/

// Extending Interface 

interface Client{
    name : string;
    email : string;
    password : string
}

interface Admin extends User{
    isAdmin : boolean
}

/* Extending interface is nothing but same like java like Admin extends Client means that Admin have all the properties of the Client(name,email,pass) and on top of that he have another property(isadmin) which is define under the Admin interface block
*/

interface eg extends Client{} // extends but dont have its own property define so it'll just have the properties of the client

interface Asad{ // first interface
    age : number;
}

interface Asad{ // second interface
    course : string;
}

function test(obj : Asad){
    obj.age // from the first interface
    obj.course // from the second interface
}

/* 
We see here that when we write multiple interface with the same name with diff values it does'nt overwrite the values instead make a single interface with all the values
*/

// Type Aliases

type sankhya = number; //  we can create a alias to a data type to create our own new data type

let a : sankhya

type mul = number | string | null

let smth : mul

function anth(obj : mul){} // it can take either number,string or null


