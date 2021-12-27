function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

function userPlay() {
  const userSelection = prompt("Rock-paper-scissors");
  const userChoise = userSelection.toLowerCase();

  if (
    userChoise === "rock" ||
    userChoise === "paper" ||
    userChoise === "scissors"
  ) {
    return userChoise;
  } else console.log("not valid choice");
}

function playRound(userInput, computerInput) {
  if (userInput === computerInput) {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, Draw game!`
    );
  } else if (userInput === "rock" && computerInput === "paper") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you lose! `
    );
  } else if (userInput === "rock" && computerInput === "scissors") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you win! `
    );
  }
}

function game()


const computer = computerPlay();
const user = userPlay();
const game1 = playRound(user, computer);
