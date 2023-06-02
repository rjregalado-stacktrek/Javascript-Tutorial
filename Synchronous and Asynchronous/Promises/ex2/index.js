
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I Love Javascript Programming!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });