//Rock Paper Scissors Game

//choose computers move
function computerPlay(){   
    let moves = ['rock','paper','scissors'];  
    let choice = Math.floor(Math.random()* moves.length);
    return moves[choice];
}

function playerPlay(){
    let playerSelection = prompt("Please enter your move: Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    let playerMove = validatePlayerPlay(playerSelection);
    
    if(playerMove === "invalid"){
        alert("Your move is not a valid move. Please try again");
        playerMove = playerPlay();
        return playerMove;
    }else{
        return playerMove;
    }
    
}

function validatePlayerPlay(playerSelection){
    switch(playerSelection)
    {
        case "rock":
            return playerSelection;
            
        case "paper":
            return playerSelection;
            
        case "scissors":
            return playerSelection;
            
        default:
            console.log("Invalid Choice");
            let badChoice = "invalid"
            return badChoice
            
    }
}

function playRound (playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("It's a tie");
    }
    console.log(playerSelection + " " + computerSelection);
}

//console.log (computerPlay())
 
const computerSelection = computerPlay();
const playerSelection = playerPlay();

//alert (`${playerSelection}`);

playRound(playerSelection, computerSelection);
