// 16. Create two types: Person (name: string) and Employee (id: number). Make a new type that combines both using intersection (&).

type Person = {
    name : string
}

type Employee = {
    id : number
}

type company = Person & Employee

const emp : company ={
    name : "asad",
    id : 1542,
}

console.log(emp.id,emp.name);

