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
            //console.log("Invalid Choice");
            let badChoice = "invalid"
            return badChoice
            
    }
}

function updateScore(player){
    if(player === "cpu"){
        cpuScore += 1;
        return;
    }

    if(player === "player"){
        playerScore += 1;
    }
}

function playRound (playerSelection, computerSelection){
    let winner = ""
    if(playerSelection === computerSelection){
        
        console.log("It's a tie");        
        return;

    }else if(playerSelection === "rock"){
        
        if(computerSelection === "paper"){
            //cpu wins
            winner = "cpu"
            
        }else if(computerSelection === "scissors"){
            //player wins
            winner = "player"
        }

    }else if(playerSelection === "paper"){
        
        if(computerSelection === "scissors"){
            //cpu wins
            winner = "cpu"
        }else if(computerSelection === "rock"){
            //player wins
            winner = "player"
        }

    }else if(playerSelection === "scissors"){
        
        if(computerSelection === "rock"){
            //cpu wins
            winner = "cpu"
        }else if(computerSelection === "paper"){
            //player wins
            winner = "player"
        }
    }    
    console.log(winner)
    //return winner;
}

//console.log (computerPlay())
 
const computerSelection = computerPlay();
const playerSelection = playerPlay();
var cpuScore = 0;
var playerScore = 0;

//alert (`${playerSelection}`);

playRound(playerSelection, computerSelection);
