
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
