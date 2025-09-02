// Create an interface Product with properties id, name, and price. Write a function that returns "Product: name, Price: price".

interface Product{
    id : string | number,
    name : string,
    price : number
}

    function isProduct(obj : Product): string{
        return `Product : ${obj.name}, Price : ${obj.price}`
    }

const Item : Product = {
    id : "A12q",
    name : "HP Victus",
    price : 85000
}

console.log(isProduct(Item));
