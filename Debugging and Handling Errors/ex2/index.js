
document.addEventListener('DOMContentLoaded', function() {
    var output = document.getElementById('output');
  
    try {
      // Code that may throw an error
      var result = doSomething();
      output.innerHTML = 'Result: ' + result;
      
    } catch (error) {
      // Handle the error
      output.innerHTML = 'An error occurred: ' + error.message;
    }
  });
  
  function doSomething() {
    // Simulating an error
    throw new Error('Something went wrong!');
  }
  