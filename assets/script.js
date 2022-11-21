/*
    rock paper scissor console version
*/

//global variable, scores
let playerScore = 0;
let computerScore = 0;

//scoreboard initialization
const scoreboard = document.querySelector('.scoreboard');
const score = document.createElement('h1');
scoreboard.appendChild(score);

//returns a random choice for rps
let getComputerChoice = () => {
    let r = Math.floor(Math.random()*3);
    switch (r) {
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        default:
            return "hello";
    }
}

let playRound = (computerSelection, playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch (computerSelection){
            case "rock":
                console.log("It's a draw, Rock is Rock");
                break;
            case "paper":
                console.log("You lose! Paper beats Rock");
                computerScore++;
                break;
            case "scissor":
                console.log("You win! Rock beats Scissor");
                playerScore++;
                break;
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock");
                playerScore++;
                break;
            case "paper":
                console.log("It's a draw, Paper is Paper");
                break;
            case "scissor":
                console.log("You lose! Scissor beats Paper");
                computerScore++;
                break;
        }
    } else if (playerSelection == "scissor") {
        switch(computerSelection) {
            case "rock":
                console.log("You lose! Rock beats Scissor");
                computerScore++;
                break;
            case "paper":
                console.log("You win! Scissor beats Paper");
                playerScore++;
                break;
            case "scissor":
                console.log("It's a draw, Scissor is Scissor");
                break;
        }
    } else {
        console.log("invalid selection try again (make sure to input rock paper or scissor");
    }
    score.textContent = `${playerScore} : ${computerScore}`;

    
}


// button initalization
const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissor_button = document.querySelector('#scissor');

// button event function
const playRock = () => {
    playRound(getComputerChoice(), 'rock');
}

const playPaper = () => {
    playRound(getComputerChoice(), 'paper');
}

const playScissor = () => {
    playRound(getComputerChoice(), 'scissor');
}

//button events
rock_button.addEventListener('click', playRock);
paper_button.addEventListener('click', playPaper);
scissor_button.addEventListener('click', playScissor);

