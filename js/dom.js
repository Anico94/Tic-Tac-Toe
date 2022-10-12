let $startButton;

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
                $('.game-board').addClass('hold-for-start');
            }
            //update the score
            gameInfo.updateScores()
            $('.score1').html(gameInfo.score1);
            $('.score2').html(gameInfo.score2);

            //add the winner to the paragraph text
            $('.win-message').html(gameInfo.winnerText());
        }
        });

    $('.next-round').on('click',function () {
        gameInfo.winner = '';
        $('.win-message').html('');
        $('.game-board').removeClass('hold-for-start');
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        gameInfo.nextRound();
    })

    const join1 = function () {
        let name1 = gameInfo.player1;
        if($('.name1').val() !== ''){
            name1 = $('.name1').val();
            gameInfo.player1 = name1;
        }
        $('section.player1').html(`<p class = 'player1'>${name1} : Score <span class = "score1">0</span></p>`);
    }
    const join2 = function () {
        let name2 = gameInfo.player2;
        if($('.name2').val() !== ''){
            name2 = $('.name2').val();
            gameInfo.player2 = name2;
        }
        $('section.player2').html(`<p class = 'player2'>${name2} : Score <span class = "score2">0</span></p>`);
    }

    const startButton = function (){
        console.log('click')
        $('.join1').trigger('click')
        $('.join2').trigger('click')
        $('.game-board').removeClass('hold-for-start');
        $('.start').replaceWith("<p class = 'win-message'></p>")
        $('div.press-start').css('height','0');
        $('h3').html('Players');
    }

    $('.start').on('click', startButton);
    $('.join1').on('click',join1)
    $('.join2').on('click',join2)

    $('.reset-full').on('click', function (){
        $('.win-message').replaceWith('<button class = "start button">Start Game</button>')
        $('div.press-start').removeClass('.hide')
        $('p.player1').replaceWith('<input class = "input name1" type="text" placeholder="Enter Player 1 Name"> <button class = "join1 button">Join</button>');
        $('p.player2').replaceWith('<input class = "input name2" type="text" placeholder="Enter Player 2 Name"> <button class = "join2 button">Join</button>');
        $('.game-board').addClass('hold-for-start');
        $('.start').on('click', startButton);
        $('.join1').on('click',join1)
        $('.join2').on('click',join2)
        gameInfo.winner = '';
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        gameInfo.resetGame();
        $('div.press-start').css('height','500px');
        $('h3').html('Players Enter Names');
    })
});