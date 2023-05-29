/*
// Naming variables

// 1. Number is not allowed at the beginning of the variable
// 2. Purely letter and numbers 
// 3. Not allowed having space between characters

// e.g.
// firstName = Camel Case
// first_name = Snake Case
// FirstName = Pascal Case

//let x = 5; // can be reassigned a new value
//x = 10

const s = "test" // value cannot be reassigned; constant
const s1 = "rf1"

//var y = 8; // can be reassigned
//y = 10; // can be reassigned

//y = 15; 
//y = 20;

let myNum = -4.2; //numeric variable, integer 2^32, float number = 12.5, negative
//console.log(myNum)

var myBigInt = 9007199254740991; // can handle bigger integers

const myStr = "hello!" // string variable
//console.log(myStr)

let myBool = true; //boolean variable

let mySym = Symbol("unique") // symbol; unique identifiers

let myUndef = undefined; // undefined; represents variable that has not been assigned a value

const myNull = null; // deliberate non-value

//let x = 10;
//console.log("The value of x is " + x); //log variable to,  concatenate 


//console.log(`The value of x is ${x}`); // template literal, backtick


// Arithmetic Operators

let x = 10;
let y = 5;

//console.log(x + y); // Output: 15 (addition)
//console.log(x - y); // Output: 5 (subtraction)
//console.log(x * y); // Output: 50 (multiplication)
//console.log(x / y); // Output: 2 (division)
//console.log(x % y); // Output: 0 (modulo/remainder)

let z = 12;
z++; // Increment z by 1
console.log(z); // Output: 11

let w = 5;
w--; // Decrement w by 1
//console.log(w); // Output: 4

//console.log(15%4) 



let x = 10;

x += 5; // Equivalent to x = x + 5
//console.log(x); // Output: 15

let y = 10;

y -= 5; // Equivalent to y = y - 5
//console.log(y); // Output: 5

let z = 10;

z *= 5; // Equivalent to z = z * 5
console.log(z); // Output: 50

let w = 10;

w /= 5; // Equivalent to w = w / 5
//console.log(w); // Output: 2

let a = 10;

a %= 3; // Equivalent to a = a % 3
//console.log(a); // Output: 1



let x = 9;
let y = 9;

//console.log(typeof(x))
//console.log(typeof(y))

//console.log(x == y); // Output: true (loose equality)
//console.log(x === y); // Output: false (strict equality)
//console.log(x != y); // Output: false (loose inequality)
//console.log(x !== y); // Output: true (strict inequality)

console.log(x < y); // Output: false (less than)
console.log(x > y); // Output: false (greater than)
console.log(x <= y); // Output: true (less than or equal to)
console.log(x >= y); // Output: true (greater than or equal to)


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

//let x = 10; // Binary: 1010
//let y = 5; // Binary: 0101

//console.log(x & y); // Output: 0 (Binary: 0000)
//console.log(x | y); // Output: 15 (Binary: 1111)

//console.log(x ^ y); // Output: 15 (Binary: 1111) (XOR)

//console.log(~x); // Output: -11 (Binary: 11111111111111111111111111110101)

//console.log(x << 1); // Output: 20 (Binary: 10100)
//console.log(x >> 1); // Output: 5 (Binary: 0101)
//console.log(x >>> 1); // Output: 5 (Binary: 0101)

/*
let number = 0;

if (number > 0) {
  console.log(number + " is positive.");
} else if (number < 0) {
  console.log(number + " is negative.");
} else {
  console.log(number + " is zero.");
}
*/

//for (initialization; condition; increment/decrement) {
  // block of code to be executed
//}

//for (let i = 5; i >= 0; i--) {
  //console.log(i);
//}

//while (condition) {
  // block of code to be executed
//}
/*
let i = 5;

while (i > 0) {
  console.log(i);
  //i--;
}

*/


//do {
  // block of code to be executed
//} while (condition);
/*
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
*/

//x = [3, 2, 1, 5, 6]

// x = [1, 2, 3, 5, 6]

//index  = 0, 1, 2, 3, 4 // array 

//x[index]

const arr = ["apple", "banana", "cherry"];
//console.log(arr[0]); // Output: "apple"
//console.log(arr[1]); // Output: "banana"
//console.log(arr[2]); // Output: "cherry"

//for (let i = 0; i < arr.length; i++){
   //console.log(arr[i]);
//}

arr.push("orange") // add element in an array
//console.log(arr)

arr.pop() // remove the last element of an array

//console.log(arr)


const str1 = "Hello";
const str2 = "world";

const str = str1 + " " + str2; // "Hello world" 
//console.log(str)


const len = str.length; // 11
//console.log(len)

/*
for (let i = 0; i < str.length; i++){
   console.log(str[i]);
}
*/

const firstChar = str[0]; // "H"

//console.log(str2.toUpperCase()); // "WORLD"

//console.log(str.toLowerCase()); // "hello world"
//console.log(str.substring(6,10)); // "Hello"
//console.log(str.indexOf("w")) // 6

// Objects : key-value pair

const person = {
  name: "Alice", // key: name, value: "Alice"
  age: 25, // key: age, value: 25
  email: "alice@stacktrek.com",
  sex: "Female"
};

//console.log(person.name) // Alice
//console.log(person.age) // 25
//console.log(person.email) // alice@stacktrek.com
//console.log(person.sex) // alice@stacktrek.com

function myFunc(name, age) {
  // Code block
  return `${name} is ${age} years old!` 
}

//console.log(myFunc("Alex", 25))

function add(x, y, z) {
  // Code block
  return x + y + z
  //console.log(x + y + z) 
}

//add(3,4,5) // 12

function remainder(a, b) {
  return a % b;
}

let result = remainder(9, 4); // result = 1

console.log(result)










