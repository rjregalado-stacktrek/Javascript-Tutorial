const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 30;
}