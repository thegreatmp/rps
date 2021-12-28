
function computerSelection (){
    const rps = ["rock", "paper", "scissors"];

    function getRandomInt (){
        return Math.floor(Math.random () * 3);
     }
    
    return rps [getRandomInt(3)];
}

function playerSelection () {
    let getPlayerInput = prompt("Rock, Paper, or Scissors? Choose wisely.");
    return getPlayerInput.toLowerCase();
}

let playRound = `${playerSelection()}${computerSelection()}`;

switch (playRound) {
    case 'rockrock':
        console.log('Your Rock vs their Rock - neither are hard enough. Tie.');
        break;
    case 'rockpaper':
        console.log('Your Rock is covered by their Paper. You LOSE.');
        break;
    case 'rockscissors':
        console.log('Your Rock smashes their Scissors. You WIN.');
        break;
    case 'paperrock':
        console.log('Your Paper covers their Rock. You WIN.');
        break;
    case 'paperpaper': 
        console.log('A Paper-Paper slap fight. Tie.');
        break;
    case 'paperscissors':
        console.log('Your Paper is cut by their Scissors. You LOSE.');
        break;
    case 'scissorsrock':
        console.log('Your Scissors is smashed by their Rock. You LOSE.');
        break;
    case 'scissorsscissors':
        console.log('Scissors on scissors crime is not a thing. Tie.');
        break;
    case 'scissorspaper':
        console.log('Your Scissors cuts their paper. You WIN.');
        break;
    default:
        console.log('Invalid choice, try again.');
}


let tie = 0;
let computerScore = 0;
let playerScore = 0;
console.log(showGameScore());
console.log(playRound);

function showGameScore(){
    return `You:${playerScore}   Them:${computerScore}   Nobody:${tie}`;
}

if (playRound = 'rockrock' || 'scissorsscissors' || 'paperpaper') {
    showGameScore (playerScore, computerScore, ++tie);
    console.log(showGameScore());
} else if (playRound = 'rockscissors' || 'paperrock' || 'scissorspaper') {
    showGameScore (++playerScore, computerScore, tie);
} else if (playRound = 'rockpaper' || 'paperscissors' || 'scissorsrock'){
    showGameScore (playerScore, ++computerScore, tie);
}



