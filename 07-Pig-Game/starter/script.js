'use strict';
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

let playerTurn = 1;
let player1Score = 0;
let player1Current = 0;
let player2Score = 0;
let player2Current = 0;

//asdap
const randomNumber = function () {
  let number = Math.trunc(Math.random() * 6) + 1;
  return number;
};
const playerScore = function (value) {
  if (playerTurn === 1) {
    current1.innerHTML = value;
    return;
  }
  if (playerTurn === 2) {
    current2.innerHTML = value;
  }
};

const switchPlayer = function () {
  if (playerTurn === 1) {
    playerTurn = 2;
    return;
  }
  if (playerTurn === 2) {
    playerTurn = 1;
  }
};

rollButton.addEventListener('click', function () {
  let randomNum = randomNumber();
  playerScore(randomNum);
  if (randomNum === 1) {
    switchPlayer();
  }
});
