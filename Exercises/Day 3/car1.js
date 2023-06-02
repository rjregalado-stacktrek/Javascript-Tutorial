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

  removeCar(car, quantity) {
    const foundCar = this.inventory.find(c => c.make === car.make && c.model === car.model && c.year === car.year);
    if (foundCar) {
      if (foundCar.quantity >= quantity) {
        foundCar.quantity -= quantity;
        if (foundCar.quantity === 0) {
          const index = this.inventory.indexOf(foundCar);
          if (index > -1) {
            this.inventory.splice(index, 1);
          }
        }
      } else {
        console.log(`There are only ${foundCar.quantity} ${foundCar.make} ${foundCar.model} cars in the inventory.`);
      }
    } else {
      console.log(`The ${car.make} ${car.model} car is not found in the inventory.`);
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
  const toyotaCorolla1 = new Car("Toyota", "Avanza", 2021, 20000, 5);
  const toyotaCorolla2 = new Car("Toyota", "Camry", 2022, 22000, 4);
  const toyotaCorolla3 = new Car("Toyota", "Rav4", 2023, 40000, 3);
  const toyotaCorolla4 = new Car("Toyota", "Prius", 2023, 13000, 6);
  const toyotaCorolla5 = new Car("Toyota", "Fortuner", 2019, 20000, 10);
  const hondaCivic1 = new Car("Honda", "Civic", 2022, 22000, 2);
  const hondaCivic2 = new Car("Honda", "Accord", 2021, 19000, 1);
  
  dealership.addCar(toyotaCorolla1);
  dealership.addCar(toyotaCorolla2);
  dealership.addCar(toyotaCorolla3);
  dealership.addCar(toyotaCorolla4);
  dealership.addCar(toyotaCorolla5);
  
  dealership.addCar(hondaCivic1);
  dealership.addCar(hondaCivic2);
  
  console.log("Inventory before deletion:");
  console.log(dealership.inventory);

  // Remove 2 Toyota Corolla cars from the inventory
  dealership.removeCar(toyotaCorolla1, 2);
  dealership.removeCar(toyotaCorolla3, 3);
  dealership.removeCar(hondaCivic1, 1);
  dealership.removeCar(toyotaCorolla3, 1);


  console.log("Inventory after deletion:");
  console.log(dealership.inventory);

  // Changing the price from 20000 to 25000 - toyotaCorolla1

  console.log("Before Price");
  console.log(dealership.inventory) 

  dealership.changeCarPrice(toyotaCorolla1, 25000);

  console.log("After Price");
  console.log(dealership.inventory) 

  
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


