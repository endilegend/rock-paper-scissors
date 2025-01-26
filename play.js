let humanScore = 0;
let computerScore = 0;
const score = document.getElementById("score");
const pPick = document.getElementById("player-pick");
const cPick = document.getElementById("computer-pick");
const resultD = document.getElementById("result-");

function compPick() {
  const choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) return "rock";
  if (choice === 2) return "paper";
  return "scissors";
}

function winner(humanPick, compPick) {
  if (
    (humanPick === "rock" && compPick === "scissors") ||
    (humanPick === "scissors" && compPick === "paper") ||
    (humanPick === "paper" && compPick === "rock")
  ) {
    humanScore++;
    return "You win!";
  } else if (humanPick === compPick) {
    return "It's a tie!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function playGame(human) {
  const comp = compPick();
  const result = winner(human, comp);
  score.textContent = `Player: ${humanScore} || Computer: ${computerScore}`;
  pPick.textContent = `You picked: ${human}`;
  cPick.textContent = `Computer picked: ${comp}`;
  resultD.textContent = `${result}`;

  resultD.classList.remove("green", "red");

  if (result === "You win!") {
    resultD.classList.add("green");
  } else if (result === "Computer wins!") {
    resultD.classList.add("red");
  }
}
