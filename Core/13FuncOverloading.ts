// Function overloading is nothing but having diff function with same name but diff params, return type

function abcd(a: string): void;
function abcd(a: number,b: number): number;

function abcd(a: any, b?: any){
    if(typeof a === "string" && b === undefined){
        // do smth
    }
    if(typeof a === "string" && typeof b === "number"){
        // do smth
    }
    else throw new Error("Something went wrong")
}