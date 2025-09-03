// Getter :- it is notihng but a func in a class which takes input out from the function

class Car{
    constructor(public _name : string,public price : number){}
    get name(){
        return this._name
    }
    // U need to use "set" keyword to set values
    set name(value : string){
        this._name = value;
    }
}
