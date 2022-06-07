//Rock Paper Scissors Game

//choose computers move
function computerplay(){
    let moves = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()* moves.length);
    return moves[choice]
}

console.log (computerplay())

