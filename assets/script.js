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

console.log(getComputerChoice())