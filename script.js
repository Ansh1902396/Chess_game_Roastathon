document.addEventListener('DOMContenLoaded', ()=>{
    let board = null; 
    const game = newChess();
    const moveHistory = document.getElementById('move-history');
    let moveCount = 1;
    let userColor = 'w';
    
    const makeRandomMove=() =>{
        const possibleMoves=game.moves();

        if(game.game_over()){
            alert("Checkmate");
        }else{
            const randomIdx=Math.floor(Math.random()) *
            possibleMoves.length);
            const move = possibleMoves[randomIdx];
            game.move(move);
            board.position(game.fen());
            recordMove(move, moveCount);
            moveCount++;




          }
        };

       

    }
}