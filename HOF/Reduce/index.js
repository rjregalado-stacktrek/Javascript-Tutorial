
const numbers = [175, 50, 25];

document.getElementById("reduce").innerHTML = numbers.reduce(myFunc); // accumulator

function myFunc(previous, next) {
  return previous - next;
}

//previous = previous + next