let tie = 0;
let computerScore = 0;
let playerScore = 0;

function playRound() {

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

let calcRound = `${playerSelection()}${computerSelection()}`;

function showGameScore(){
    return `You:${playerScore}   Them:${computerScore}   Nobody:${tie}`;
}

switch (calcRound) {
    case 'rockrock':
        console.log('Your Rock vs their Rock - neither are hard enough. Tie.');
        showGameScore (playerScore, computerScore, ++tie);
        break;
    case 'rockpaper':
        console.log('Your Rock is covered by their Paper. You LOSE.');
        showGameScore (playerScore, ++computerScore, tie);
        break;
    case 'rockscissors':
        console.log('Your Rock smashes their Scissors. You WIN.');
        showGameScore (++playerScore, computerScore, tie);
        break;
    case 'paperrock':
        console.log('Your Paper covers their Rock. You WIN.');
        showGameScore (++playerScore, computerScore, tie);
        break;
    case 'paperpaper': 
        console.log('A Paper-Paper slap fight. Tie.');
        showGameScore (playerScore, computerScore, ++tie);
        break;
    case 'paperscissors':
        console.log('Your Paper is cut by their Scissors. You LOSE.');
        showGameScore (playerScore, ++computerScore, tie);
        break;
    case 'scissorsrock':
        console.log('Your Scissors is smashed by their Rock. You LOSE.');
        showGameScore (playerScore, ++computerScore, tie);
        break;
    case 'scissorsscissors':
        console.log('Scissors on scissors crime is not a thing. Tie.');
        showGameScore (playerScore, computerScore, ++tie);
        break;
    case 'scissorspaper':
        console.log('Your Scissors cuts their paper. You WIN.');
        showGameScore (++playerScore, computerScore, tie);
        break;
    default:
        console.log('Invalid choice, try again.');
        playRound();
        break;
}
console.log(showGameScore());
}

function playMatch() {
    for (i = 0; i < 5; i++){
        playRound();
    }
    if (playerScore > computerScore) {
        return 'You win! Your prize is nothing!';
    } else if (playerScore < computerScore) {
        return 'You lose! Go and sulk!';
    } else if (playerScore = computerScore) {
        return 'A tie! Try again!';
    }
}

