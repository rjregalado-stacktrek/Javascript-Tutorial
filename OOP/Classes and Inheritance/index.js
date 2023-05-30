/*
//JavaScript Class Syntax

// Syntax

class ClassName {
  constructor() { ... }
}

e.g

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//A JavaScript class is not an object.

//It is a template for JavaScript objects.

//Using a Class

//When you have a class, you can use the class to create objects:

const myCar1 = new Car("Toyota", 2010);

const myCar2 = new Car("Mitsubishi", 2019);

//Class Methods

//Syntax:

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

*/

//================== CLASSES =================

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Toyota", 2010);

const myCar2 = new Car("Mitsubishi", 2019);

function myCar(){
    document.getElementById("car1").innerHTML = `My first car is ${myCar1.name}.`;
    document.getElementById("car2").innerHTML = `My second car is ${myCar2.name}.`;
}

// parent class
class Person {
  //name; // optional

  constructor(name) {
    this.name = name; // initializes name
  }

  // method
  introduceSelf() {
    return `Hi! I'm ${this.name}`;
  }
}

const olivia = new Person('Olivia'); // create new Person

const introduce = olivia.introduceSelf();
console.log(introduce)

function myName(){
    document.getElementById("name").innerHTML = introduce;
}


//============== INHERITANCES ===========================
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class

class Professor extends Person {

  teaches; // optional

  constructor(name, teaches) {
    super(name); // refers to parent  classs
    this.teaches = teaches;
  }
  
  // methods
  introduceSelf() {
    return `My name is ${this.name}, and I will be your ${this.teaches} professor.`;
  }

  grade(score) {
    const grade = `Your grade is ${score}.`
    return grade;
  }

}

const juan = new  Professor("Juan Dela Cruz", "Javascript");

const grade = juan.grade(80);

console.log(grade)


// Another Example

// Parent Class

class Vehicle {
  // parent's constructor 
  constructor(brand) {
    // parent's properties
    this.carname = brand;
  }
  // parent's method
  present() {
    return `I have a ${this.carname}`;
  }
}

// Class Inheritance 
// Example

class Model extends Vehicle {
  constructor(brand, mod) {
    // By calling the super() method in the constructor method, we call 
    // the parent's constructor method and gets access to 
    // the parent's properties and methods.
    super(brand); 
    this.model = mod;
  }
  show() {
    return `${this.present()}, it is a ${this.model}.`;
  }
}

let myVehicle = new Model("Mitsubishi", "L300");
console.log(myVehicle.show())

function vehicle(){
  document.getElementById("vehicle").innerHTML = myVehicle.show();
}


