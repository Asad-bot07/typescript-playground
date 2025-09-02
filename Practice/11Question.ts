// Create a type alias User with properties name: string, age: number, isAdmin?: boolean.
 type User = {
     name: string;
     age: number;
     isAdmin?: boolean;
 };
 
 const customer : User = {
    name : "Asad",
    age : 19,
    isAdmin : true,
    // gives error as not declared in type
    // email : "asad" 
}

 console.log(customer);


 