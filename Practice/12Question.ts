// 12. Write a function that accepts a User type and returns a greeting string.

type User = {
    name : string,
    isAdmin? : boolean
}

function greet(obj : User): string{
    if(obj.isAdmin) return `Hello ${obj.name}(Admin Sahab!!`
    return `Hello ${obj.name} !!`
}

const cust : User = {
    name : "Asad",
    isAdmin : true
}

console.log(greet(cust));
