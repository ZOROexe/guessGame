'use strict';

let num = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const startMessage = function (msg) {
  document.querySelector('.start').textContent = msg;
};

const operation = function () {
  const guess = Number(document.querySelector('.numbers').value);
  console.log(guess);
  if (!guess) {
    startMessage('No Number Entered! 🚫');
  } else if (guess !== num) {
    if (score > 1) {
      startMessage(guess > num ? 'Too High!! 🤡' : 'Too Low!! 🤓');
      score--;
      document.querySelector('.score-num').textContent = score;
    } else {
      document.querySelector('.score-num').textContent = 0;
      startMessage('You Lost 👎');
      document.querySelector('body').style.backgroundColor = '#dc2f2f';
    }
  } else if (guess === num) {
    startMessage('Correct Answer!! 🍾');
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.high-num').textContent = highScore;
    }
  }
};

document.querySelector('.check').addEventListener('click', function () {
  operation();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    operation();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  startMessage('Start Guessing...');
  document.querySelector('.score-num').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.numbers').value = '';
});
