function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(choices.length * Math.random())];
  const outcome = randomChoice;
  return outcome;
}

const computerSelection = getComputerChoice();

let playerInput = prompt("Rock, paper or scissors?");
let playerSelection = playerInput.toLowerCase();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "paper") {
    computerScore += 1;
    return console.log("You lose. Paper beats rock.");
  }

  if (playerSelection === "paper" && computerSelection == "rock") {
    playerScore += 1;
    return console.log("You win. Paper beats rock.");
  }

  if (playerSelection === "rock" && computerSelection == "scissors") {
    playerScore += 1;
    return console.log("You win. Rock beats scissors.");
  }

  if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScore += 1;

    return console.log("You lose. Rock beats scissors.");
  }

  if (playerSelection === "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return console.log("You win. Scissors beats paper.");
  }

  if (playerSelection === "paper" && computerSelection == "scissors") {
    computerScore += 1;
    return console.log("You lose. Scissors beats paper.");
  }

  if (playerSelection === "paper" && computerSelection == "paper") {
    return console.log("It's a draw.");
  }

  if (playerSelection === "rock" && computerSelection == "rock") {
    return console.log("It's a draw.");
  }

  if (playerSelection === "scissors" && computerSelection == "scissors") {
    return console.log("It's a draw.");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    playerInput = prompt("Rock, paper or scissors?");
    playerSelection = playerInput.toLowerCase();
    console.log(
      `Player score: ${playerScore}, computer score: ${computerScore}`
    );
  }
}

game();
