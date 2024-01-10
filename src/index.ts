
const check: HTMLButtonElement = document.querySelector(".check")!;
const message: HTMLParagraphElement = document.querySelector(".message")!;
const guessElement: HTMLInputElement = document.querySelector(".guess")!;
const testNumber: HTMLDivElement = document.querySelector(".number")!;
const again: HTMLButtonElement = document.querySelector(".again")!;
const body: HTMLBodyElement = document.querySelector("body")!;
let randomNumber: number = Math.trunc(Math.random() * 20 + 1);
let score: HTMLSpanElement = document.querySelector(".score")!;
let highscore: HTMLSpanElement = document.querySelector(".highscore")!;
let mainscore = 20;
let currentHighscore = 0;

 

// generating random number

check.addEventListener("click", () => {
  let guessValue: number = +guessElement.value;

  // when there is no number
  if (!guessValue) {
    message.textContent = "No Number";
    // You might want to return or use 'else' to avoid executing the remaining code
  } else {
    // when player wins
    if (guessValue === randomNumber) {
      message.textContent = "Correct Number";
      testNumber.textContent = randomNumber.toString();
      body.style.backgroundColor = "green";

      // Update scores and highscore
      if (mainscore > currentHighscore) {
        currentHighscore = mainscore;
        highscore.textContent = currentHighscore.toString();
      }

      // Disable the input after correct guess
      guessElement.disabled = true;
    } else {
      // when there is too high or too low guess number
      message.textContent = guessValue > randomNumber ? "Too high!" : "Too low!";
      body.style.backgroundColor = guessValue > randomNumber ? "red" : "blue";

      // Reduce score and check for game over
      if (mainscore > 1) {
        mainscore--;
        score.textContent = mainscore.toString();
      } else {
        message.textContent = 'You lost the game!';
        score.textContent = '0';
        message.style.color = 'blue';
        // Disable the input after game over
        guessElement.disabled = true;
      }
    }
  }
});

again.addEventListener("click", function(){
  guessElement.disabled = false;
  score.textContent = '20';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  body.style.backgroundColor = "";
  guessElement.value = "";
  testNumber.textContent = '?';
  message.textContent = 'Start guessing...';
  message.style.color = '';
  mainscore = 20;
});

 
