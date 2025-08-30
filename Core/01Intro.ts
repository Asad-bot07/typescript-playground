//TypeScript gives you type safety like we do in other programming language e.g. Java,C++...etc
let user = {
    name : "Asad",
    age : 19,
    id : 2408
}
// in ts even if there's a error and we overlooked it it'll be compiled into js one disadvantage of ts
console.log(user.name);
//console.log(user.email) should've printed undefined in js but in ts it shows error 

// to compile ts file use tsc _file_name_