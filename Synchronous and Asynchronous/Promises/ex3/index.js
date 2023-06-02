function myDisplayer(message) {
    document.getElementById("demo").innerHTML = message;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.open('GET', "test.html");
    req.send();
  }
  
  getFile(myDisplayer); 