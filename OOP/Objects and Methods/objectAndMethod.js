//============= OBJECTS AND METHODS =====================

// Objects are collections of key-value pairs that store and organize data in a structured way. 
// The values can be of any data type or could also be arrays or even functions.

// The this keyword in the methods reference the object 
// from which the function or method is being called. 
// In the example, ${this.name[0]} and ${this.balance} refers to the balance value 
// defined within the same object.

const account = {
	accountNumber: '1234567890',
	balance: 1000,
	owner: {
		name: ['Taylor','Dimabilis'],
		address: 'QC',
		phone: '123-456-777'
	},
	checkBalance: function() {
		return `Hi ${this.owner.name[0]} ${this.owner.name[1]}, ${this.owner.address}, your balance is Php${this.balance}.`
	},
	deposit: function(amount) {
    	this.balance += amount;
    	return `Deposited Php${amount}. New balance is Php${this.balance}.`;
  	},
  	withdraw: function(amount) {
	    if (this.balance >= amount) {
	      this.balance -= amount;
	      return `Withdrew Php${amount}. New balance is Php${this.balance}.`;
	    } else {
	     return `Insufficient funds. Current balance is Php${this.balance}.`;
    }
  }
}

// CALLING THE METHODS

const balance = account.checkBalance();

// Out: Hi Taylor Dimabilis, your balance is Php1000.

const deposit = account.deposit(500);
// Out: Deposit Php500. New balance is Php1500.

const withdraw = account.withdraw(1000);
// Out: Withdrew Php1000. New balance is Php500.

function eWallet(){
    
    document.getElementById("balance").innerHTML = balance;

    document.getElementById("deposit").innerHTML = deposit;

    document.getElementById("withdraw").innerHTML = withdraw;
}

