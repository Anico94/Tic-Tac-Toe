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

    $('.next-round').on('click',function () {
        console.log('clicked')
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        gameInfo.resetGame();
    })

    $('.join1').on('click',function () {
        let name1 = gameInfo.player1;
        if($('.name1').val() !== ''){
            name1 = $('.name1').val();
            gameInfo.player1 = name1;
        }
        $('section.player1').replaceWith(`<p>${name1} : Score <span class = "score1">0</span></p>`);
    })
    $('.join2').on('click',function () {
        let name2 = gameInfo.player2;
        if($('.name2').val() !== ''){
            name2 = $('.name2').val();
            gameInfo.player2 = name2;
        }
        $('section.player2').replaceWith(`<p>${name2} : Score <span class = "score2">0</span></p>`);
    })

    $('.start').on('click', function (){
        $('.join1').trigger('click')
        $('.join2').trigger('click')
        $('.game-board').removeClass('hold-for-start');
        $('.start').replaceWith("<p class = 'win-message'></p>")
    })




});