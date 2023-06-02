
async function myMessage() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I Love Javascript Programming!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myMessage();