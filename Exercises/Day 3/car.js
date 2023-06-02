class Car {
    constructor(make, model, year, price, quantity) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class Dealership {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.inventory = [];
    }
  
    addCar(car) {
      this.inventory.push(car);
    }
  
    removeCar(car) {
      const index = this.inventory.indexOf(car);
      if (index > -1) {
        this.inventory.splice(index, 1); // pop() this.inventory[0]["quantity"] - 1
      }
    }
  
    changeCarPrice(car, newPrice) {
      car.price = newPrice;
    }
  }
  
  class Salesperson {
    constructor(name, employeeID) {
      this.name = name;
      this.employeeID = employeeID;
      this.carsSold = [];
    }
  
    sellCar(car, customer) {
      const index = dealership.inventory.indexOf(car);
      if (index > -1) {
        dealership.inventory.splice(index, 1);
        this.carsSold.push(car);
        customer.buyCar(car);
        console.log(`Car sold to ${customer.name}: ${car.make} ${car.model}`);
      }
    }
  }
  
  class Manager extends Salesperson {
    approveSale(salesperson, car, customer) {
      salesperson.sellCar(car, customer);
    }
  }
  
  class Customer {
    constructor(name, address) {
      this.name = name;
      this.address = address;
      this.carsOwned = [];
    }
  
    buyCar(car) {
      this.carsOwned.push(car);
    }
  
    sellCar(car) {
      const index = this.carsOwned.indexOf(car);
      if (index > -1) {
        this.carsOwned.splice(index, 1);
        dealership.addCar(car);
        console.log(`${this.name} sold a car: ${car.make} ${car.model}`);
      }
    }
  }
  
  // Creating the dealership
  const dealership = new Dealership("ABC Auto", "123 Main Street");
  
  // Adding cars to the inventory
  const toyotaCorolla1 = new Car("Toyota", "Corolla", 2021, 20000, 5);
  const toyotaCorolla2 = new Car("Toyota", "Corolla", 2022, 22000, 5);
  const hondaCivic1 = new Car("Honda", "Civic", 2021, 19000, 3);
  
  dealership.addCar(toyotaCorolla1);
  dealership.addCar(toyotaCorolla2);
  dealership.addCar(hondaCivic1);
  //console.log(dealership())
  console.log(dealership.inventory[0]["quantity"]-1)
  
  // Creating salespeople and a manager
  const salesperson1 = new Salesperson("John Doe", 1001);
  const salesperson2 = new Salesperson("Jane Smith", 1002);
  const manager = new Manager("Mike Johnson", 2001);
  
  // Creating customers
  const customer1 = new Customer("Alice Brown", "456 Elm Street");
  const customer2 = new Customer("Bob Davis", "789 Oak Avenue");
  
  // Salesperson sells a car to a customer
  manager.approveSale(salesperson1, toyotaCorolla1, customer1);
  
  // Customer sells a car back to the dealership
  customer1.sellCar(toyotaCorolla1);
  