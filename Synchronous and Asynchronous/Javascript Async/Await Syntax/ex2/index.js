async function myMessage() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I Love Javascript Programming.");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myMessage();