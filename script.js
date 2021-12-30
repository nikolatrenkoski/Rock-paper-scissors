let userScore = 0;
let computerScore = 0;

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
      `User choice is ${userInput}, computer choice is ${computerInput}, Draw game!, You(${userScore}): computer(${computerScore}) `
    );
  } else if (userInput === "scissors" && computerInput === "paper") {
    userScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, You(${userScore}): computer(${computerScore}) `
    );
  } else if (userInput === "rock" && computerInput === "scissors") {
    userScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, You(${userScore}): computer(${computerScore})  `
    );
  } else if (userInput === "paper" && computerInput === "rock") {
    userScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, You(${userScore}): computer(${computerScore})  `
    );
  } else if (userInput === "paper" && computerInput === "scissors") {
    computerScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput},You(${userScore}): computer(${computerScore}) `
    );
  } else if (userInput === "scissors" && computerInput === "rock") {
    computerScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput},You(${userScore}): computer(${computerScore})  `
    );
  } else if (userInput === "rock" && computerInput === "paper") {
    computerScore++;
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, You(${userScore}): computer(${computerScore}) `
    );
  }
}

for (let i = 0; i < 5; i++) {
  const computer = computerPlay();
  const user = userPlay();
  const game1 = playRound(user, computer);
}
