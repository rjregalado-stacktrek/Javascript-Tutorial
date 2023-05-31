// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
    document.getElementById('guessInput').disabled = true;
  } else if (guess < randomNumber) {
    document.getElementById('result').innerHTML = 'Too low! Try again.';
  } else {
    document.getElementById('result').innerHTML = 'Too high! Try again.';
  }
}