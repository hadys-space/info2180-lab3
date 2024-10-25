document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board div');
    const statusPlay = document.getElementById('status');
    let boardSlots = ['','','','','','','','',''];
    let player = ["X", "O"];
    let playerIndex = 0; 

    const winnnerOptions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function winningPlayer(){
        for (const condition of winnnerOptions){
            const [a,b,c] = condition

            if(boardSlots[a] && boardSlots[a] === boardSlots[b] && boardSlots[a] === boardSlots[c]){
                    return [a,b,c]
            }
        }
        return false;
    }

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click',function(e){
            if(boardSlots[index] === ''){
                boardSlots[index] = player[playerIndex];

                square.textContent = player[playerIndex];

                square.classList.add(player[playerIndex]);

                if(winningPlayer() !== false){
                    statusPlay.textContent = `Congratulations! ${player[playerIndex]} is the Winner!`;
                    statusPlay.classList.add('you-won');
                    return;
                }else{
                    playerIndex = playerIndex === 0 ? 1:0;
                }

            }

        square.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });

        square.addEventListener('mouseout',function(e){
            e.target.classList.remove('hover');
        });

        });
    });
});

