/*
// Naming variables

//1. Number is not allowed at the beginning of the variable name.
//2. Purely letter and numbers. 
//3. Not allowed having space between characters.
//4. Javascript Keywords are not allowed (e.g: let, var, if, var, const, switch,
      return, function, try)

Keyword	Description: 

var	      -> Declares a variable
let	      -> Declares a block variable
const	    -> Declares a block constant
if	      -> Marks a block of statements to be executed on a condition
switch    -> Marks a block of statements to be executed in different cases
for	      -> Marks a block of statements to be executed in a loop
function  -> Declares a function
return	  -> Exits a function
try	      -> Implements error handling to a block of statements

*/

// e.g.
// firstName = Camel Case
// first_name = Snake Case
// FirstName = Pascal Case

/*

//======= DECLARING VARIABLES =========

let x = 5;  // can be reassigned a new value
let x = 10; // can not be redeclared
x = 10       

const s = "test" // value cannot be reassigned; constant
const s = "rf1"  // Not allowed

var y = 8; // can be reassigned

y = 10; // now is y is 10

y = 15; // now  y is 15 

y = 20; // now y is 20

e.g. 

var x = 4;   // Allowed
let x = 5;   // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}

{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
}

//Redeclaring Variables

//Redeclaring a variable using the var keyword can impose problems.

//Redeclaring a variable inside a block will also redeclare the variable outside the block:

e.g

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

//Redeclaring a variable using the let keyword can solve this problem.

//Redeclaring a variable inside a block will not redeclare the variable outside the block:

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

*/

/*
//============ DATA TYPES ==============

let myNum = -4.2; //numeric variable, integer 2^32, float number = 12.5, negative
console.log(myNum)
console.log(typeof(myNum))

var myBigInt = 9007199254740991; // can handle bigger integers
console.log(typeof(myBigInt))

const myStr = "hello!" // string variable
console.log(myStr)

let myBool = true; //boolean variable

let mySym = Symbol("unique") // symbol; unique identifiers

let myUndef = undefined; // undefined; represents variable that has not been assigned a value

const myNull = null; // deliberate non-value

//let x = 10;
//console.log("The value of x is " + x); //log variable to,  concatenate 


//console.log(`The value of x is ${x}`); // template literal, backtick

*/


/*

//============== Arithmetic Operators ===============

let x = 10;
let y = 5;

console.log(x + y); // Output: 15 (addition)
console.log(x - y); // Output: 5 (subtraction)
console.log(x * y); // Output: 50 (multiplication)
console.log(x / y); // Output: 2 (division)
console.log(x % y); // Output: 0 (modulo/remainder)

let z = 12;
z++; // Increment z by 1
console.log(z); // Output: 11

let w = 5;
w--; // Decrement w by 1
console.log(w); // Output: 4

console.log(15%4) 

//====== Assignment Operators =====

let x = 10;

x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

let y = 10;

y -= 5; // Equivalent to y = y - 5
console.log(y); // Output: 5

let z = 10;

z *= 5; // Equivalent to z = z * 5
console.log(z); // Output: 50

let w = 10;

w /= 5; // Equivalent to w = w / 5
console.log(w); // Output: 2

let a = 10;

a %= 3; // Equivalent to a = a % 3
console.log(a); // Output: 1

*/

/*
//=========== COMPARISON OPERATORS =========

let x = 9;
let y = "9";

//console.log(typeof(x)) // number type
//console.log(typeof(y)) // string type

//console.log(x == y); // Output: true (loose equality)
//console.log(x === y); // Output: false (strict equality)
//console.log(x != y); // Output: false (loose inequality)
//console.log(x !== y); // Output: true (strict inequality)

console.log(x < y); // Output: false (less than)
console.log(x > y); // Output: false (greater than)
console.log(x <= y); // Output: true (less than or equal to)
console.log(x >= y); // Output: true (greater than or equal to)

*/

/*
//============= LOGICAL OPERATORS ===========

let x = 10;
let y = 5;
let z = 0;

//console.log(x < y && y > z); // Output: true (AND) 


//console.log(x < y || y < z); // Output: true (OR)
//console.log(!(x > y)); // Output: false (NOT)

//false || false = false 
//false || true = true 
//true || false = true 
//true || true = true  


console.log(!(x > y)); // Output: true (NOT)

*/

/*
//============= Bitwise Operators =============

let x = 10; // Binary: 1010
let y = 5; // Binary: 0101

console.log(x & y); // Output: 0 (Binary: 0000)
console.log(x | y); // Output: 15 (Binary: 1111)

console.log(x ^ y); // Output: 15 (Binary: 1111) (XOR)

console.log(~x); // Output: -11 (Binary: 11111111111111111111111111110101)

console.log(x << 1); // Output: 20 (Binary: 10100)
console.log(x >> 1); // Output: 5 (Binary: 0101)
console.log(x >>> 1); // Output: 5 (Binary: 0101)

*/

/*
//======  Conditionals ======

let number = 0;

if (number > 0) {
  console.log(number + " is positive.");
} else if (number < 0) {
  console.log(number + " is negative.");
} else {
  console.log(number + " is zero.");
}

*/

/*
//============ LOOPS ========================

for (initialization; condition; increment/decrement) {
  // block of code to be executed
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

while (condition) {
  // block of code to be executed
}


let i = 5;

while (i > 0) {
  console.log(i);
  //i--;
}




do {
  // block of code to be executed
} while (condition);

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

*/

/*
//============== ARRAYS ================

x = [3, 2, 1, 5, 6]
//index  = 0, 1, 2, 3, 4 // array

// Accessed the element of an array 
//array[index]
//e.g:

x[0] = 3
x[1] = 2
x[2] = 1

const arr = ["apple", "banana", "cherry"];
console.log(arr[0]); // Output: "apple"
console.log(arr[1]); // Output: "banana"
console.log(arr[2]); // Output: "cherry"

for (let i = 0; i < arr.length; i++){
   console.log(arr[i]);
}

arr.push("orange") // add element in an array
console.log(arr)

arr.pop() // remove the last element of an array

console.log(arr)

*/

/*
//============== STRINGS ===========

const str1 = "Hello";
const str2 = "world";

const str = str1 + " " + str2; // "Hello world" 
console.log(str)


const len = str.length; // 11
console.log(len)


for (let i = 0; i < str.length; i++){
   console.log(str[i]);
}

const firstChar = str[0]; // "H"

console.log(str2.toUpperCase()); // "WORLD"

console.log(str.toLowerCase()); // "hello world"
console.log(str.substring(6,10)); // "Hello"
console.log(str.indexOf("w")) // 6

*/

/*
//=========== Objects : key-value pair ===============

const person = {
  name: "Alice", // key: name, value: "Alice"
  age: 25, // key: age, value: 25
  email: "alice@stacktrek.com",
  sex: "Female"
};

console.log(person.name) // Alice
console.log(person.age) // 25
console.log(person.email) // alice@stacktrek.com
console.log(person.sex) // Female

*/

/*
//============ FUNCTIONS ==============

function myFunc(name, age) {
  // Code block
  return `${name} is ${age} years old!` 
}

console.log(myFunc("Alex", 25))

function add(x, y, z) {
  // Code block
  return x + y + z
}

let sum = add(3,4,5) // 12
console.log(sum)

function remainder(a, b) {
  return a % b;
}

let result = remainder(9, 4); // result = 1

console.log(result)

//==== ARROW FUNCTIONS ======

//Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

console.log(myFunction(2,3)) // 6

// Without parameters

hello = () => {
  return "Hello World!";
}

// With Parameters

hello = (value) => "Hello " + value;
console.log(hello("World!"));

// Arrow Function Without Parentheses:

hello = value => "Hello " + value;
console.log(hello("Stacktrek!"))

//Default Parameter Values

function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5)); // 15

//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of 
//arguments as an array:

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x) // 326

*/











