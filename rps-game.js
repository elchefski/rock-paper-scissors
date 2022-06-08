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
            return badChoice;
            
    }
}

function updateScore(player){

    if(player === "cpu"){        
        cpuScore += 1;        
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
            console.log("You Lose! Paper beats Rock.")
            winner = "cpu";
            
        }else if(computerSelection === "scissors"){
            //player wins
            console.log("You Win! Rock beats Scissors.")
            winner = "player";
        }

    }else if(playerSelection === "paper"){
        
        if(computerSelection === "scissors"){
            //cpu wins
            console.log("You Lose! Scissors beats Paper.")
            winner = "cpu";
        }else if(computerSelection === "rock"){
            //player wins
            console.log("You Win! Paper beats Rock.")
            winner = "player";
        }

    }else if(playerSelection === "scissors"){
        
        if(computerSelection === "rock"){
            //cpu wins
            console.log("You Lose! Rock beats Scissors.")
            winner = "cpu";
        }else if(computerSelection === "paper"){
            //player wins
            console.log("You Win! Scissors beats Paper.")
            winner = "player";
        }
    }    
    
    return winner;
}

function game(){
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    console.log("Round Number: " + round);
    
    let winner = playRound(playerSelection, computerSelection);
    
    updateScore(winner);
    console.log("Your Score: " + playerScore + " CPU Score: " + cpuScore )

    if(cpuScore == 5){
        console.log("Game over, the cpu has won 5 rounds.");
        gameOn = false;
    }
    if(playerScore == 5){
        console.log("Congratulations, you won 5 rounds!");
        gameOn = false;
    }

    round += 1;

}

//console.log (computerPlay())
 

var gameOn = true;
var cpuScore = 0;
var playerScore = 0;
var round = 1;


while(gameOn == true){
    game();
}

//alert (`${playerSelection}`);




