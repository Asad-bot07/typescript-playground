// Abstract class (Blueprint)
abstract class Animal {
  // Abstract method (must be implemented by child class)
  abstract makeSound(): void;

  // Normal method (optional for child to use)
  move(): void {
    console.log("Moving...");
  }
}

// Child class Dog extends Animal
class Dog extends Animal {
  // Must implement the abstract method
  makeSound(): void {
    console.log("Woof Woof!");
  }
}

// Child class Cat extends Animal
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

// Usage
let dog = new Dog();
dog.makeSound(); // Output: Woof Woof!
dog.move();      // Output: Moving...

let cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move();      // Output: Moving...

// Error: You cannot do this
// let a = new Animal(); // Cannot create an instance of an abstract class
