// functions

function Car() : string{
    return `BMW M3`
}
Car()

// Function types


// Callback as a param

function abce(name : string, callback: (value: string) => void){}

abce("Asad",(value: string)=>{
    console.log(value);
})

// Optional params

function isHuman(name: string,age: number,gender : string = "Not to be disclosed"){
    console.log(name,age,gender);
}

isHuman("Asad",19)
isHuman("Asad",19,"Male")