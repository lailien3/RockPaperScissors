console.log('Welcome to * ROCK * PAPER * SCISSORS* ');

// ensure user inputs valid choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

// generate computers choices
const getComputerChoice = ()  => {
const randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else  if (randomNumber ===2 ){
    return 'scissors';
  }
}

// outcomes based on choice combinations
const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === 'bomb') {
    console.log('Secret move! User wins!')
  } else if (getUserChoice === getComputerChoice) {
    console.log(`Tie!`)
  } else if (getUserChoice === 'rock') {
        if (getComputerChoice === 'paper') {
          console.log(`Computer wins!`)
        } else if (getComputerChoice === 'scissors') {
          console.log(`User wins!`)
        }
  } else if (getUserChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
          console.log(`Computer wins!`)
        } else if (getComputerChoice === 'rock') {
          console.log(`User wins!`)
        }
  } else if (getUserChoice === 'scissors') {
        if (getComputerChoice === 'rock') {
          console.log(`Computer wins!`)
        } else if (getComputerChoice === 'paper') {
          console.log(`User wins!`)
        }
  }
}

// set user and computer choices
let userChoice = getUserChoice('bomb');
let computerChoice = getComputerChoice();

// set game
const playGame = () => {
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
}

// PLAY
playGame();
determineWinner(userChoice, computerChoice);

