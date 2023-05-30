
//============= CONSTRUCTORS ================

// Constructors define a template or blueprint for an object and allows us to 
// create multiple instances of that object. 
// Capital first letter to differentiate them from functions.

function Account(accountNumber, balance, ownerName){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownername = ownerName;
    

    this.checkBalance = function() {
      return `Hi ${this.ownername[0]} ${this.ownername[1]}, your balance is Php${this.balance}.`
    };
  
    this.deposit = function(amount) {
        this.balance += amount;
      return `Deposited ${amount}. New balance is ${this.balance}.`;
    };
    
    this.withdraw = function(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Withdrew ${amount}. New balance is ${this.balance}.`;
      } else {
        return `Insufficient funds. Current balance is ${this.balance}.`;
      }
    };
  }

const account = new Account("123545625", 1500, ["Juan", "Dela Cruz"]); // instance

//console.log(account)

const  balance1 = account.checkBalance();
console.log(balance1);

const deposit1 = account.deposit(500);
console.log(deposit1);

const withdraw1 = account.withdraw(1000);
console.log(withdraw1);


function accountDetail(){

    document.getElementById("balance").innerHTML = balance1;
    
    document.getElementById("deposit").innerHTML = deposit1;

    document.getElementById("withdraw").innerHTML = withdraw1;

}  