// Union
 let a : string | number;

 // We use | to say that a var can have either a string value or a number value
 // We use Union when we know that the values of a var can be differ b/w 2 or more datatypes

// Intersection

 type User = {
    name : string;
    email : string;
 }

 // we use & when we want to say that it'll have both the values 

 type Admin = User & {
    isAdmin : boolean
 }

let b : Admin;
/* b will have the values of user and admin
b.email
b.isAdmin
b.name
*/