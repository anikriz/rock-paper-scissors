function getComputerChoice() {
    choiceArray = ['rock', 'paper', 'scissors'];
    randomChoice = choiceArray[Math.floor(Math.random() * 3)];
    console.log("Computer Choice is " + randomChoice);
    console.log("Your Choice is " + playerSelection);
    return randomChoice;
}

let myScore = 0;
let compScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "paper") {
        //console.log("You Lose! Paper beats Rock");
        compScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "scissors") {
        //console.log("You Won! Rock beats Scissors");
        myScore += 1;
        return "You Won! Rock beats Scissors";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "rock") {
        //console.log("You Won! Paper beats Rock");
        myScore += 1;
        return "You Won! Paper beats Rock";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "scissors") {
        //console.log("You Lose! Scissors beats Paper");
        compScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "paper") {
        //console.log("You Won! Scissors beats Paper");
        myScore += 1;
        return "You Won! Scissors beats Paper";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "rock") {
        //console.log("You Lose! Rock beats Scissors");
        compScore += 1;
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        let slicedAnswer = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let tieAnswer = "It's a tie! You and the Computer chose " + slicedAnswer;
        //console.log("It's a tie! You and the Computer chose " + tieAnswer);
        tieScore += 1;
        return tieAnswer;
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playerSelection = prompt("Type in your choice: Rock, Paper, Scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("My Score = " + myScore + ".\nComputer Score = " + compScore + ".\nTies = " + tieScore + ".");
    }
    if (myScore > compScore) {
        console.log("\n \nCongratulations! You are the winner");
    } else if (myScore < compScore) {
        console.log("\n \nSorry! You lost the game");
    } else if (myScore == compScore) {
        console.log("\n \nAlas! This is a tie");
    }
}

console.log(game());