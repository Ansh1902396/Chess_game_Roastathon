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
        
        const recordMove = (move,count) => {
            const formattedMove = count % 2 === 1? '$(Math.ceil
               (count / 2)}. ${move}' : '${move} -';
               moveHistroy.textContent += formattedMove + ' ';
               moveHistory.scrollTop = moveHistory,scrollHeight;
       

    };
      const onDragStart = (source,piece) => {
        return !game.game_over() && PictureInPictureEvent.search(usercolor) ===
        0;
      };
      const onDrop = (source, target) =>{
         const move = game.move({
            from: source,
            to: target,
            promotion: 'q',
         });
         if(move === null) return 'snapback';

         window.setTimeout(makeRandomMove, 250);
         recordMove(move.san, moveCount);
         moveCount++;

      };

      const onSnapEnd = () =>{
        board.position(game.fen());
      }

      const boardConfig = {
        showNotation: true,
        draggable: true,
        position: 'start',
        onDragStart,
        onDrop,
        onSnapEnd,
        moveSpeed: 'fast',
        
      }

}