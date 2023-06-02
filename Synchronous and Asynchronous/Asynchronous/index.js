//================= ASYNCHRONOUS JAVASCRIPT =====================

// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// With asynchronous code, we can allow other code to execute while waiting for 
// the current operation to complete. Once that task is finished, 
// the program will be presented with the result.

setTimeout(myFunction, 2000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I Love Programming!!";
}