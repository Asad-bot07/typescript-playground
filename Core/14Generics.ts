// Generics is like template of cpp
// making smth that takes any datatype and execute it but it's not "any" it's not or using | :/

function abcd<T>(a: T){}

abcd<string>("Hello")
abcd<number>(15)
abcd<boolean>(true)

// Generic Interface

interface User<T>{
    name: string,
    age: number,
    key: T
}

let Asad: User<string> = {
    name: "Asad",
    age: 19,
    key: "lock"
}
Asad.key

// Generic Class 

class Car<T>{
    constructor(public name: string,public api: T){}
}

// Disadvantage

function smth<T>(a: T,b: T): T{
    return "Hey";
}

smth<string>("Asad","Asad1")

// this will give an error as "Hey" is an string literal to overcome this we use return<T>"Hey"
