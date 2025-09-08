// 20. Write a function with a default parameter.

const add = (a : number, b : number = 0) : number => {
    return a+b
}

console.log(add(5));
console.log(add(5, 9));


