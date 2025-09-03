// Problem

function abcd(a,b,c,d,e....,k){}

abcd(1,2,3,4,5,6....,15)
// if the arguement passed is n number so you have to make n number param in the function to accept the arguement so to overcome this issue we use Rest parameter


function isRest(...arr: number[]){
    console.log(arr);
}
isRest(1,2,3,4,5,6,7,8,9)

// ... is rest operator which takes the params and stores it in the array of type number