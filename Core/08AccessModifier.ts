// Public : it can be accessed outside the class with inside the class

class Car{
    constructor(public name : string){}
}

const obj = new Car("Asad")
console.log(obj.name);

obj.name = "asxuu"

console.log(obj.name);

// Private : it can only be accessed inside the class and not outside the class

class Car1{
    constructor(private name : string){}
}

const obj1 = new Car1("Aizen")

console.log(obj1.name); // throws an error :- Property 'name' is private and only accessible within class 'Car1'.
