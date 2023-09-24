"use strict";

const messageEl = document.querySelector(".message");
const startIconEl = document.querySelector(".start-icn");
const secretNumberEl = document.querySelector(".secret-number");
const secretNumberBoxEl = document.querySelector(".secret-number-box");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  messageEl.textContent = message;
};

const changeSecretNumberBoxStyle = () => {
  secretNumberEl.style.color = "#fff";
  secretNumberBoxEl.style.width = "30rem";
  secretNumberBoxEl.style.border = "none";
};

const correctSecretNumberBoxStyle = () => {
  changeSecretNumberBoxStyle();
  secretNumberBoxEl.style.backgroundColor = "#16db65";
};

const wrongSecretNumberBoxStyle = () => {
  changeSecretNumberBoxStyle();
  secretNumberBoxEl.style.backgroundColor = "#da1e37";
};

const resetSecretNumberBoxStyle = () => {
  secretNumberEl.style.color = "#333";
  secretNumberBoxEl.style.width = "25rem";
  secretNumberBoxEl.style.backgroundColor = "#fff";
  secretNumberBoxEl.style.border = "2px solid #333";
};

const displaySecretNumber = (number) => (secretNumberEl.textContent = number);
const displayScore = (score) => (scoreEl.textContent = score);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(guessEl.value);

  if (!guess) {
    displayMessage("No Number...");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    displaySecretNumber(secretNumber);
    correctSecretNumberBoxStyle();

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Number too high" : "Number too low");
      score--;
      displayScore(score);
    } else {
      wrongSecretNumberBoxStyle();
      displaySecretNumber(secretNumber);
      displayMessage("Game over...");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  displayScore(score);
  displaySecretNumber("?");
  guessEl.value = "";
  resetSecretNumberBoxStyle();
});
