## Questions :

```
🟢 Basic Types

1. Declare variables of type string, number, and boolean. Assign values to them.
2. Create a variable with type any, assign it different values, and print them.
3. What is the difference between any and unknown in TypeScript? Write an example to show it.
4. Create a function that accepts a string and returns its length.

🟡 Arrays & Tuples

5. Declare an array of numbers and an array of strings.
6. Write a function that accepts an array of numbers and returns the first element.
7. Create a tuple that stores a string and a number (example: "Asad", 19). Access both elements.
8. Write a function that accepts a tuple [string, number] and returns a formatted string like: "Name: Asad, Age: 19".

🔵 Enums

9. Create an enum for Days of the week and print Days.Monday.
10. Write a function that accepts a value of type Days enum and returns a message like "Today is Monday".

🟣 Type Aliases & Interfaces

11. Create a type alias User with properties name: string, age: number, isAdmin?: boolean.
12. Write a function that accepts a User type and returns a greeting string.
13. Create an interface Product with properties id, name, and price. Write a function that accepts Product and returns "Product: name, Price: price".
14. Show the difference between type and interface with a small example.

🔴 Unions & Intersections

15. Write a function that accepts either a string or a number (union type) and returns a string.
16. Create two types: Person (name: string) and Employee (id: number). Make a new type that combines both using intersection (&).
17. Write a function that accepts this combined type and returns a string with both name and id.

🟤 Functions

18. Write a function that adds two numbers and returns the result.
19. Write a function with an optional parameter (example: greet(name?: string)). If no name is passed, return "Hello, Guest".
20. Write a function with a default parameter (example: multiply(a: number, b: number = 2)).
21. Write a function that returns void (does not return anything, just logs something).
22. Write a function with return type never (example: a function that always throws an error). // We not doing this one

🟢 Objects & Classes

19. Create an object car with properties brand, model, and year. Print them.
20. Write a class Person with properties name and age. Add a method introduce() that returns "Hi, I'm {name}, {age} years old.".
21. Create a class Student that extends Person and adds a property grade. Override introduce() to also include the grade.
22. Demonstrate the use of public, private, and protected with a class BankAccount.

🟡 Constructors & Methods

23. Write a class Rectangle with properties width and height. Add a method getArea() that returns the area.
24. Create a class Circle with a radius property. Add a method getCircumference().
25. Create a class Employee with a constructor that initializes id, name, and salary. Add a method getDetails().

🔵 Inheritance & Polymorphism

26. Write a class Animal with a method makeSound(). Extend it with Dog and Cat, overriding makeSound() differently.
27. Create a base class Shape with a method area(). Extend it with Square and Triangle, each implementing area() differently.
28. Demonstrate method overloading in TypeScript with a class Calculator.

🟣 Interfaces & Abstract Classes

29. Create an interface Vehicle with properties brand and speed. Implement it in a class Car.
30. Write an abstract class Device with an abstract method powerOn(). Extend it with Laptop and Phone.
31. Show how an interface can extend another interface with Person and Employee.

🔴 Generics

32. Create a generic function identity<T>(value: T): T. Test it with string and number.
33. Write a generic class Box<T> that stores a value and has a method getValue().
34. Create a generic function getFirst<T>(arr: T[]): T | undefined.

🟤 Modules

35. Create two files: mathUtils.ts and app.ts. Export a function add(a, b) from mathUtils.ts and import it in app.ts.
36. Write a default export function greet() in one file and import it in another.
37. Demonstrate named and default exports together in a small example.
```
