document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board div');
    let boardSlots = ['','','','','','','','',''];
    let player = ["X", "O"];
    let playerIndex = 0; 

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click',function(e){
            if(boardSlots[index] === ''){
                boardSlots[index] = player[playerIndex];

                square.textContent = player[playerIndex];

                square.classList.add(player[playerIndex]);

                playerIndex = playerIndex === 0 ? 1:0;

            }
    
        });
    });
});

