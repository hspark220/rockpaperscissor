/*
    rock paper scissor console version
*/

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

    }
    
}

let playRound = (computerSelection, playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch (computerSelection){
            case "rock":
                console.log("It's a draw, Rock is Rock");
                return 0;
                break;
            case "paper":
                console.log("You lose! Paper beats Rock");
                return -1;
                break;
            case "scissor":
                console.log("You win! Rock beats Scissor");
                return 1;
                break;
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock");
                return 1;
                break;
            case "paper":
                console.log("It's a draw, Paper is Paper");
                return 0;
                break;
            case "scissor":
                console.log("You lose! Scissor beats Paper");
                return -1;
                break;
        }
    } else if (playerSelection == "scissor") {
        switch(computerSelection) {
            case "rock":
                console.log("You lose! Rock beats Scissor");
                return -1;
                break;
            case "paper":
                console.log("You win! Scissor beats Paper");
                return 1;
                break;
            case "scissor":
                console.log("It's a draw, Scissor is Scissor");
                return 0;
                break;
        }
    } else {
        console.log("invalid selection try again (make sure to input rock paper or scissor");
        return 0;
    }
}

let game = () => {
    let score;
    let pScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock paper scissor shoot!");
        let round = playRound(getComputerChoice(), playerSelection);
        if (round == 0) {
            i = i-1;
        } else if (round == 1){
            pScore++;
        }
        
    }
    let result = `Result is...
    player  :${pScore}
    computer:${5-pScore}`
    console.log(result);
}

game();