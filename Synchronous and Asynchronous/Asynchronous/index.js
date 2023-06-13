//================= ASYNCHRONOUS JAVASCRIPT =====================

// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// With asynchronous code, we can allow other code to execute while waiting for 
// the current operation to complete. Once that task is finished, 
// the program will be presented with the result.

/*
setTimeout(myFunction, 2000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I Love Programming!!";
}

*/

function steps(){
let step_one = "Step One!!";
let step_two = "Step Two!!";

console.log(step_one)
document.getElementById("stepOne").innerHTML = step_one;

setTimeout(function(){
  document.getElementById("asynchronous").innerHTML = "Asynchronous";
    console.log("Asynchronous");
}, 2000) // 2000 milliseconds(ms) or 2 seconds

setTimeout(function(){
  document.getElementById("stepTwo").innerHTML = step_two;
  console.log(step_two);
}, 5000) // 5 s

document.getElementById("stepTwo").innerHTML = step_two;
console.log(step_two);

}

steps();

/**
 * Step One!!
 * Step Two!!
 * Asynchronous
 */