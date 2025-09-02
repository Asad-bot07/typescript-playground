class Car{
    public model : string = "BMW m3"

    public Show = () : void => {
        console.log(this.model); // for accessing members(var/func) which is defined/declared in a class we need "this" keyword
    }

    public Show2 = () : void => {
        this.Show() // same for calling the function
        console.log("func 1 is called");
    }

    public Show3 = () : void => {
        let name = "Asad"
        this.Show2()
        console.log(name); // variables defined and declared inside a method of the class can directly be accessed without using "this" keyword
    }
}

class Factory{
    public name;
    constructor(name:string){
        this.name = name;
    }
    // here we're assigning the var name declared in the class the value of the name coming as a params to the constructor using "this" keyword
    // "this" keyword here basically points the variable which is inside the class
}