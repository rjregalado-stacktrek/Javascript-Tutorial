//=========== JS Async ===============

// EXAMPLE

async function myFunction() {
  return "Hello";
}
// Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}

// Here is how to use the Promise:

myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


function myMessage(message) {
    document.getElementById("demo").innerHTML = message;
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myMessage(value);},
    function(error) {myMessage(error);}
  );

  