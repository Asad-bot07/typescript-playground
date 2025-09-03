// Problem
/*
function abcd(a,b,c,d,e....,k){}

abcd(1,2,3,4,5,6....,15)
// if the arguement passed is n number so you have to make n number param in the function to accept the arguement so to overcome this issue we use Rest parameter
*/
function isRest() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
isRest(1, 2, 3, 4, 5, 6, 7, 8, 9);
