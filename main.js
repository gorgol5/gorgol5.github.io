let computerSelection = "";
let playerSelection = "";
let text = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 5;
let roundCounter = 0;
let computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    return (computerSelection = "scissors");
  } else if (x == 1) {
    return (computerSelection = "paper");
  } else return (computerSelection = "rock");
};
let playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (text = "This time you draw ") && drawAtTheEnd();
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return (
      (computerScore += 1) &&
      (text = `You loose this round. Computer choose ${computerSelection}.`) &&
      (rounds -= 1)
    );
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    return (
      (playerScore += 1) &&
      (text = `You win this round .Computer choose ${computerSelection}.`) &&
      (rounds -= 1)
    );
  }
};
let drawAtTheEnd = function () {
  if (
    rounds == 0 ||
    matchResult == "Match is over. Start again!" ||
    matchResult == "Computer win this match." ||
    matchResult == "You win this match."
  ) {
    rounds = 5;
    roundCounter = 0;
    computerScore = 0;
    playerScore = 0;
  }
};
let Round = function () {
  computerPlay();
  playRound(playerSelection, computerSelection);
  overallScore();
};
//-----------------------------------------------------//
let roundResult = document.querySelector(".roundResult");
let matchResult = document.querySelector(".matchResult");
let overallResult = document.querySelector(".overallResult");
let round = document.querySelector(".rounds");
const buttons = document.querySelectorAll(".button");
const restart = document.querySelector(".restart");

let overallScore = function () {
  if (playerScore >= 3 && rounds == 0) {
    return (totalResult = "You win this match.");
  } else if (computerScore >= 3 && rounds == 0) {
    totalResult = "Computer win this match.";
  } else if (rounds > 0) {
    totalResult = "You dont play enough rounds.";
  } else {
    totalResult = "Match is over. Start again!";
    computerScore = 0;
    playerScore = 0;
    rounds = 5;
    roundCounter = 0;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = `${button.id}`;
    Round();
    roundResult.innerHTML = `${text}`;
    overallResult.innerHTML = `Player ${playerScore}:${computerScore} Computer`;
    matchResult.innerHTML = `${totalResult} `;
    round.innerHTML = `You play ${roundCounter} rounds. Rounds to go: ${rounds}`;
    roundCounter += 1;
  })
);
restart.addEventListener("click", () => {
  rounds = 5;
  roundCounter = 0;
  computerScore = 0;
  playerScore = 0;
  roundResult.innerHTML = `Match restarted`;
  matchResult.innerHTML = `Match restarted `;
  round.innerHTML = `You play ${roundCounter} rounds. Rounds to go: ${rounds}`;
  overallResult.innerHTML = `Player ${playerScore}:${computerScore} Computer`;
});
