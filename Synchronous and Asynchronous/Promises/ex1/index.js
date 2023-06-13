//============ PROMISES ==================
// A Promise is a JavaScript object that links producing code and consuming code


// Promise Syntax

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


function myDisplayer(message) {
  document.getElementById("demo").innerHTML = message;
}


let myPromise1 = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 5) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise1.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);