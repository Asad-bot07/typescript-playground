// Write a function that accepts either a string or a number (union type) and returns a string.

function CheckEmail(email : string | number) : String{
    return `${email} is the input`
}

console.log(CheckEmail("Asad123")) // Asad123 is the input
console.log(CheckEmail(123456)) // 123456 is the input