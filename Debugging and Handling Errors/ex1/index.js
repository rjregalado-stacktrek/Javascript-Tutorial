document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the number input value
    var number = document.getElementById("numberInput").value;
  
    try {
      // Convert the input to a number
      var parsedNumber = parseFloat(number);
  
      // Check if the conversion was successful
      if (isNaN(parsedNumber)) {
        throw new Error("Invalid number");
      }
  
      // Display the result
      document.getElementById("result").innerHTML = "The number is: " + parsedNumber;
    } catch (error) {
      // Display the error message
      document.getElementById("result").innerHTML = "Error: " + error.message;
    }
  });
  