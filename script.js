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
  } else if (userInput === "scissors" && computerInput === "paper") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you win! `
    );
  } else if (userInput === "rock" && computerInput === "scissors") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you win! `
    );
  } else if (userInput === "paper" && computerInput === "rock") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you win! `
    );
  } else if (userInput === "paper" && computerInput === "scissors") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you lose! `
    );
  } else if (userInput === "scissors" && computerInput === "rock") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you lose! `
    );
  } else if (userInput === "rock" && computerInput === "paper") {
    console.log(
      `User choice is ${userInput}, computer choice is ${computerInput}, you lose! `
    );
  }
}

for (let i = 0; 5 <= computer; i++) {
  const computer = computerPlay();
  const user = userPlay();
  const game1 = playRound(user, computer);
}
