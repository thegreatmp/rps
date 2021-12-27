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

function getResult () {
    computerSelection();
    playerSelection ();
    return `${computerSelection}` + `${playerSelection}`;
}