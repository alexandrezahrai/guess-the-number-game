'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Print it to the webpage
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'ERROR: No Number!';
    displayMessage('ERROR: No Number!');
  } // when there is a guess
  else if (guess === secretNumber) {
    // when player wins
    // document.querySelector('.message').textContent = '🏆 You nailed it!';
    displayMessage('🏆 You nailed it!');
    // displays secret number as soon as player wins
    document.querySelector('.number').textContent = secretNumber;
    // changes background color of body when player wins (must specify string)
    document.querySelector('body').style.backgroundColor = '#60b347';
    // increase width of 'number' container when player wins
    document.querySelector('.number').style.width = '30rem';
    // update the user's highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // when guess is wrong (too high and too low)
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high! Guess again' : 'Too low! Guess again';
      displayMessage(
        guess > secretNumber ? 'Too high! Guess again' : 'Too low! Guess again'
      );
      // decrease score by 1
      score = score - 1;
      // update score
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥 Game over! You lost...';
      displayMessage('💥 Game over! You lost...');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Resets everything when 'Play Again!' button is clicked by user
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
