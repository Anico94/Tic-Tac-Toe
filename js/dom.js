$(document).ready(function(){

    
    //depending on the turn number select the correct url for the image.
    
    const crossURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
    const circleURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW59vKiyqzPYfYMMIKP_Oe6PTcW3LCxhzFyA&usqp=CAU";

    $('div.square').on('click',function(){
        gameInfo.addChoice($(this).attr('class').slice(-2)); 
        $(this).addClass(`checked ${gameInfo.checkTurn()}`);
        $(this).parent().removeClass(gameInfo.checkTurn());
        gameInfo.turnCounter = Number(gameInfo.turnCounter) + 1;
        $(this).parent().addClass(gameInfo.checkTurn());
        if(gameInfo.checkWin()){
            for (i = 0; i < gameInfo.winSquares.length; i++){
                let position = gameInfo.winSquares[i];
                $(`div.square.position${position}`).addClass('animate');
            }
        }
        });

    $('.reset').on('click',function () {
        console.log('clicked')
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        gameInfo.resetGame();
    })





});