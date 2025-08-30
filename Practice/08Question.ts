// Write a function that accepts a tuple [string, number] and returns a formatted string like: "Name: Asad, Age: 19".
function takeTupe(tupe:[string,number]):string{
    return `Name : ${tupe[0]}, Age : ${tupe[1]}`
}

let tupe:[string,number] = ["Asad",19]

console.log(takeTupe(tupe));
